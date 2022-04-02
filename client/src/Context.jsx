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
    const [filterComplete, setFilterComplete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const characterLimit = 200;
    

    useEffect(() => {
      setIsLoading(true);
        axios 
        .get("http://localhost:8000/api/note")
            // .get("/api/note")
            .then((res) => {
              setNotesArray(res.data);
              setIsLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
      }, [])
      
    const createNote = () => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          title: noteTitle,
          text: noteText,
          category: category,
          completed: complete ? true : false,
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
        completed: complete ? true : false,
        date: date.toLocaleDateString()
      }
      
        if(noteText.trim().length > 0) {
            axios 
              .post("http://localhost:8000/api/note" , newNote)  
              // .post("/api/note" , newNote)  
              .then((res) => {
                  createNote(noteText);
                  setNotesArray([ ...notesArray, newNote])
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
        // axios.delete( `/api/note/${_id}`)
        .catch((error) => console.log(error))
        setNotesArray((notesArray) => {
          return notesArray.filter((note) => note._id !== _id)
        })

      }


      const completeNote = (index) => {
        const newNotesArray = [...notesArray];
        newNotesArray[index].complete = !newNotesArray[index].complete;
        setNotesArray(newNotesArray);
        axios 
            .put(`http://localhost:8000/api/note/${newNotesArray[index]._id}`, newNotesArray[index])
            // .put(`/api/note/${newNotesArray[index]._id}`, newNotesArray[index])
            .catch((err) => console.log(err))
      }

      const completeNoteStyle = (index) => {
        const newNotesArray = [...notesArray];
        if (newNotesArray[index].complete) {
          return 'note note-complete'
        } else {
          return 'note'
        }
      }
    
    const editNote = (_id) => {
      setId(_id);
      setOpenEdit(true);
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
        setFilterCategory(e.target.value);
      }

      useEffect(() => {
        const sortByComplete = (e) => {
          switch (filterComplete) {
            case "completed": 
            setNotesArray(notesArray.filter((note) => note.complete));
            return;
            case "uncompleted":
              setNotesArray(notesArray.filter((note) => !note.complete));
              return;
              default: 
              setNotesArray(notesArray);
              break;
            }
          }
          sortByComplete()
          // try putting a dependency into the dependency array that is not an object
        }, [filterComplete, notesArray])

  return ( 
    <NoteContext.Provider value={{ notesArray, noteText, noteTitle, category, open, complete, openEdit, id, filterCategory, searchText, isLoading, setIsLoading, setNotesArray, setSearchText, setNoteText, setNoteTitle, setCategory, setOpen, setComplete, setOpenEdit, setId, setFilterCategory, saveNote, createNote, deleteNote, completeNote, completeNoteStyle, editNote, handleTextChange, handleTitleChange, handleCategorySort, filterComplete, setFilterComplete
    }}>
        {children}
    </NoteContext.Provider>
  )
};

export const NoteState = () => {
    return useContext(NoteContext);
}

export default Context;
