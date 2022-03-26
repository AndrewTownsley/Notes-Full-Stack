import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import { NoteState } from './Context';

function App() {
  const {
    notesArray,
    filterCategory,
    setNotesArray,
  } = NoteState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('/api/note')
      .then((res) => {
        setNotesArray(res.data);
      })
      .catch((err) => console.log(err));
  }, [setNotesArray]);

  return (
    <div className="App">
      <SideBar />
      <NoteList
        notesArray={
            filterCategory === '' ? notesArray.filter((note) => note.text.toLowerCase().includes(searchText))
              : notesArray.filter((note) => note.text.toLowerCase().includes(searchText))
            && notesArray.filter((note) => note.category === filterCategory)
            }
        setNotesArray={setNotesArray}
        handleSearchNote={setSearchText}
      />
    </div>
  );
}

export default App;
