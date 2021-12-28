import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import axios from "axios";  
import "./App.css";
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';


function App() {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [category, setCategory] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  // const [complete, setComplete] = useLocalStorage("complete", false);
  const [notesArray, setNotesArray] = useState([])
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

const completeNote = index => {
  // const newNotes = [...notesArray];
   complete ? setComplete(true) : setComplete(false);
  // setNotesArray(newNotes);
};


// const completeNote = (id) => {
//   notesArray.map(item => {
//     if(item.id === id) {
//       return { ...item, completed: !item.completed};
//     }
//     return item;
//   })
// }
  
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

  return (
    <div className="App">
        <SideBar 
          handleTextChange={handleTextChange}
          handleTitleChange={handleTitleChange}
          noteTitle={noteTitle}
          noteText={noteText}
          setCategory={setCategory}
          saveNote={saveNote}
          notesArray={notesArray}
          deleteNote={deleteNote}
          open={open}
        />
        <NoteList 
          notesArray={
            filterCategory === "" ? notesArray.filter(note => note.text.toLowerCase().includes(searchText)) 
            :
            notesArray.filter(note => note.text.toLowerCase().includes(searchText)) &&
            notesArray.filter(note => note.category === filterCategory)
          }
          createNote={createNote}
          saveNote={saveNote}
          handleSearchNote={setSearchText}
          handleCategorySort={handleCategorySort}
          category={category}
          open={open}
          setOpen={setOpen}
          deleteNote={deleteNote}
          completeNote={completeNote}
          complete={complete}
          setComplete={setComplete}
          setNotesArray={setNotesArray}
        />  
    </div>
  );
}


export default App;
