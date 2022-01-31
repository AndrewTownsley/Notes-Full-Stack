import React, { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import axios from "axios"; 

export const NoteContext = createContext(undefined);
export const NoteDispatchContext = createContext(undefined);

const Context = ({ children}) => {
    const [notesArray, setNotesArray] = useState([])
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [category, setCategory] = useState('');
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    const [complete, setComplete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [id, setId] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const characterLimit = 200;

    useEffect(() => {
        axios 
            .get("http://localhost:8000/api/note")
            .then((res) => {
              setNotesArray(res.data);
            })
            .catch((err) => console.log(err))
      }, [])

    const createNote = () => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          title: noteTitle,
          text: noteText,
          category: category,
          completed: false,
          date: date.toLocaleDateString()
        }
        const newNotes = [...notesArray, newNote]
        setNotesArray(newNotes);
      }
      
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
                .post("http://localhost:8000/api/note" , newNote)  
                .then((res) => {
                    createNote(noteText);
                    setNotesArray([...notesArray, newNote])
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

      
const deleteNote = ( _id ) => {
    axios.delete( `http://localhost:8000/api/note/${_id}`)
    .catch((error) => console.log(error))
    setNotesArray((notesArray) => {
      return notesArray.filter((note) => note._id !== _id)
    })
    
  }
  
  const completeNote = (index) => {
    let notesArrayCopy = [...notesArray];
  
    (notesArrayCopy[index].completed)
    ?
    (notesArrayCopy[index].completed = false)
    :
    (notesArrayCopy[index].completed = true)
    setNotesArray(notesArrayCopy)
  }
  
  const completeNoteStyle = (index) => {
    if(notesArray[index].completed) {
      return "note note-complete"
    } else {
      return "note"
    }
  }
  
  const editNote = (_id) => {
    setId(_id);
    setOpenEdit(true);
    console.log("edit note function has been called...");
  } 


    const handleTitleChange = (event) => {
        if(event.target.value.length >= 0) {
          setNoteTitle(event.target.value);
        }
      }
      
      const handleTextChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
          setNoteText(event.target.value)
        }
      }

      
  const handleCategorySort = (e) => {
      console.log("category sort");
    setFilterCategory(e.target.value);
  }

  return ( 
    <NoteContext.Provider value={{notesArray, noteText, noteTitle, category, open, complete, openEdit, id, filterCategory, searchText, setSearchText, setNotesArray, setNoteText, setNoteTitle, setCategory, setOpen, setComplete, setOpenEdit, setId, setFilterCategory, saveNote, createNote, deleteNote, completeNote, completeNoteStyle, editNote, handleTextChange, handleTitleChange, handleCategorySort }}>
            {children}
    </NoteContext.Provider>
  )
};

export const NoteState = () => {
    return useContext(NoteContext);
}

export default Context;
