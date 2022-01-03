import React, { useRef, useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa"
import axios from 'axios';
import { nanoid } from "nanoid";


const Edit = ({ editNote, notesArray, setNotesArray, _id, noteText, noteTitle, createNote, setNoteText, setNoteTitle, setComplete, handleTitleChange, handleTextChange, handleCategoryChange, category, setOpenEdit, handleEditedNote}) => {
  const [noteData, setNoteData] = useState({ title: "", text: "", category: "" })

  const modalRef = useRef(null);

  useEffect(() => {
    const handleCloseModal = (event) => {
      if(!modalRef.current?.contains(event.target))
        setOpenEdit(false)   
    }
    window.addEventListener('click', handleCloseModal)
    return () => window.removeEventListener('click', handleCloseModal)
}, [setOpenEdit])

const handleChange = (e) => {
  setNoteData((noteData) => ({...noteData, [e.target.value]: e.target.value}))
}

const saveNote = async (e) => {
  e.preventDefault();
  console.log({ _id }, { noteData });

  // const date = new Date();

  // const newNote = {
  //   id: nanoid(),
  //   title: noteTitle,
  //   text: noteText,
  //   category: category,
  //   completed: false,
  //   date: date.toLocaleDateString()
  // }


    axios 
        .put(`http://localhost:8000/api/note/${_id}` , noteData)  
        .then((res) => {
          console.log(res.data.message);
            // setNoteData({})
            // createNote(noteText);
            // setNotesArray([...notesArray, newNote])
            // setNoteText('');
            // setNoteTitle('');
            // setComplete(false);
        })
        .catch((err) => {
          console.log(err.message)
          console.log("ERROR could not create note.");
        })
}


    return (
      <div className="edit-window">
        <div ref={modalRef} className="note-input note-edit" onClick={() => setOpenEdit(true)}   >
            <form onSubmit={(e) => {
              saveNote();
              editNote();
            }} className='edit'>
            <label htmlFor="note-title">
              </label>
              <input
               onChange={handleChange} 
               value={noteTitle} 
               name="title"
               type="text" id="note-title" name="note-title" placeholder="Title..." 
               autoComplete="off" 
               />
            <textarea 
              onChange={handleChange}
              value={noteText} 
              name="text"
              rows="6" cols="20" 
              placeholder="Enter note here..." 
              id="note-input"
              >
              </textarea>
              <select className="note-input-select" onChange={handleCategoryChange} name="category" id="categorySelect">
                <option value="">Category</option>
                <option value="Important">Important !</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
                <option value="Home">Home</option>
                <option value="Personal">Personal</option>
                <option value="Misc">Misc</option>
              </select>
            <button type="submit" className="save-btn" 
              // onClick={(e) => saveNote}
            ><FaPlus className="plus"/>Save Note</button>
            <button onClick={() => setOpenEdit(false)}>close</button>    
        </form>
    </div>
  </div>
    )
}

export default Edit;
