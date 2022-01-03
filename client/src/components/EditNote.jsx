import React, { useRef, useEffect } from 'react'
import { FaPlus } from "react-icons/fa"
import axios from 'axios';
import { nanoid } from "nanoid";


const Edit = ({ _id, noteText, noteTitle, createNote, setNoteText, setNoteTitle, setComplete, handleTitleChange, handleTextChange, handleCategoryChange, category, setOpenEdit, handleEditedNote}) => {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleCloseModal = (event) => {
      if(!modalRef.current?.contains(event.target))
        setOpenEdit(false)   
    }
    window.addEventListener('click', handleCloseModal)
    return () => window.removeEventListener('click', handleCloseModal)
}, [])

const saveNote = async () => {
  const date = new Date();

  const newNote = {
    id: nanoid(),
    title: noteTitle,
    text: noteText,
    category: category,
    completed: false,
    date: date.toLocaleDateString()
  }

  if(noteText.trim().length > 0) {

    axios 
        .put(`http://localhost:8000/api/note/${_id}` , newNote)  
        .then((res) => {
            createNote(noteText);
            // setNotesArray([...notesArray, newNote])
            setNoteText('');
            setNoteTitle('');
            setComplete(false);
        })
        .catch((err) => {
          console.log(err.message)
          console.log("ERROR could not create note.");
        })
}
}


    return (
      <div className="edit-window">
        <div ref={modalRef} className="note-input note-edit" onClick={() => setOpenEdit(true)}   >
            <form className='edit'>
            <label htmlFor="note-title">
              </label>
              <input
               onChange={handleTitleChange} 
               value={noteTitle} 
               type="text" id="note-title" name="note-title" placeholder="Title..." 
               autoComplete="off" 
               />
            <textarea 
              onChange={handleTextChange}
              value={noteText} 
              rows="6" cols="20" 
              placeholder="Enter note here..." 
              name="note" 
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
            <button className="save-btn" onClick={saveNote}><FaPlus className="plus"/>Save Note</button>
            <button onClick={() => setOpenEdit(false)}>close</button>    
        </form>
    </div>
  </div>
    )
}

export default Edit;
