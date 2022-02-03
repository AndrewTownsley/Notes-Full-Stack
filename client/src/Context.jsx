import React, { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import useLocalStorage from './components/useLocalStorage';
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
    const characterLimit = 200;

    useEffect(() => {
        axios 
            .get("http://localhost:8000/api/note")
            .then((res) => {
              setNotesArray(res.data);
            })
            .catch((err) => console.log(err))
      }, [])


      // save completed property to database on post
      
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
      

      // save completed property to local storage
      
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
        const newNotesArray = [...notesArray];
        newNotesArray[index].complete = !newNotesArray[index].complete;
        setNotesArray(newNotesArray);
        axios 
            .put(`http://localhost:8000/api/note/${newNotesArray[index]._id}`, newNotesArray[index])
            .then((res) => {
              console.log(res)
            })
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

    // const completeNote = (index) => {
    //   let notesArrayCopy = [...notesArray];
    
    //   (notesArrayCopy[index].completed)
    //   ?
    //   (notesArrayCopy[index].completed = false)
    //   :
    //   (notesArrayCopy[index].completed = true)
    //   setNotesArray(notesArrayCopy)
    //   // save setComplete state to local storage
    //   localStorage.setItem('complete', JSON.stringify(complete))
    // }



    // const completeNoteStyle = (index) => {
    //   if(notesArray[index].completed) {
    //     return "note note-complete"
    //   } else {
    //     return "note"
    //   }
    // }
    
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

      useEffect(() => {

        // const sortByComplete = (e) => {
        //   if(filterComplete === "complete") {
        //     setNotesArray(notesArray.filter((note) => note.complete))
        //   } else if
        //     (filterComplete === "uncomplete") {
        //       setNotesArray(notesArray.filter((note) => !note.complete))
        //     } else 
        //       setNotesArray(notesArray)
        //   }
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
        }, [filterComplete])

  return ( 
    <NoteContext.Provider value={{ notesArray, noteText, noteTitle, category, open, complete, openEdit, id, filterCategory, searchText, setNotesArray, setSearchText, setNoteText, setNoteTitle, setCategory, setOpen, setComplete, setOpenEdit, setId, setFilterCategory, saveNote, createNote, deleteNote, completeNote, completeNoteStyle, editNote, handleTextChange, handleTitleChange, handleCategorySort, filterComplete, setFilterComplete
    }}>
        {children}
    </NoteContext.Provider>
  )
};

export const NoteState = () => {
    return useContext(NoteContext);
}

export default Context;
