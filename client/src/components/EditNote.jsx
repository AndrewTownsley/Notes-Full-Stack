import React, { useRef, useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import { FaPlus } from "react-icons/fa"
import axios from 'axios';
import { NoteState } from '../Context';


const Edit = (
  {  id, notesArray, setNotesArray, _id, noteText, noteTitle, createNote, setNoteText, setNoteTitle, setOpenEdit, handleEditedNote}
  ) => {
    // const {
    //   id, notesArray, setNotesArray, _id, noteText, noteTitle, createNote, setNoteText, setNoteTitle, setOpenEdit, handleEditedNote
    // } = NoteState();

  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [editCategory, setEditCategory] = useState('');
  console.log(notesArray);
  const note = notesArray.find(note => (note._id).toString() === id);
  console.log(note);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleCloseModal = (event) => {
      if(!modalRef.current?.contains(event.target))
        setOpenEdit(false)   
    }
    window.addEventListener('click', handleCloseModal)
    return () => window.removeEventListener('click', handleCloseModal)
}, [setOpenEdit])

useEffect(() => {
  if (note) {
    setEditTitle(note.title);
    setEditText(note.text);
    setEditCategory(note.category)
  }
}, [note, setEditTitle, setEditText])

const handleSubmit = (e,  _id) => {
  // e.preventDefault();
  console.log(id);
  const updatedNote = { _id, title: editTitle, text: editText, category: editCategory }
  console.log("edit form submitted...");
  axios 
    .put(`http://localhost:8000/api/note/${id}` , updatedNote)  
    .then((res) => {
      setNotesArray(notesArray.map(note => note._id === _id ? { ...res.data } : note))
      setEditTitle("");
      setEditText("");
    console.log("put request successful");
        })
        .catch((err) => {
          console.log(err.message)
          console.log("ERROR could not create note.");
        })
}


    return (
      <div className="edit-window">
        <div ref={modalRef} className="note-input note-edit" onClick={() => setOpenEdit(true)}   >
            <form 
              onSubmit={(e) => handleSubmit(id)} 
              className='edit'>
            <label htmlFor="note-title">
              </label>
              <input
               onChange={(e) => setEditTitle(e.target.value)} 
               value={editTitle} 
               name="title"
               id="noteTitle"
               type="text" 
               placeholder="Title..." 
               autoComplete="off" 
               />
            <textarea 
              onChange={(e) => setEditText(e.target.value)}
              value={editText} 
              name="text"
              id="noteText"
              rows="6" cols="20" 
              placeholder="Enter note here..." 
              >
              </textarea>
              <select className="note-input-select" onChange={(e) => setEditCategory(e.target.value)} name="category" id="categorySelect">
                  <option value="">Category</option>
                  <option value="Important">Important !</option>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Home">Home</option>
                  <option value="Personal">Personal</option>
                  <option value="Misc">Misc</option>
                </select>
            <button 
                type="submit" 
                className="save-btn" 
                // onClick={() => saveEditedNote(note.id)}
            ><FaPlus className="plus"/>Save Note</button>
            <button onClick={() => setOpenEdit(false)}>close</button>    
        </form>
    </div>
  </div>
    )
}

export default Edit;
