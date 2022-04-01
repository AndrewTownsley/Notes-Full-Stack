import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import Loading from './components/Loading';
import { NoteState } from './Context';

function App() {
  const {
    notesArray,
    filterCategory,
    setNotesArray,
    isLoading,
    setIsLoading,
  } = NoteState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios
      // .get('http://localhost:8000/api/note')
      .get('api/note')
      .then((res) => {
        setNotesArray(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setNotesArray]);

  return (
    <div className="App">
      <SideBar />
      {
        isLoading ? <Loading /> :
        
        <NoteList
        notesArray={
          filterCategory === '' ? notesArray.filter((note) => note.text.toLowerCase().includes(searchText))
          : notesArray.filter((note) => note.text.toLowerCase().includes(searchText))
          && notesArray.filter((note) => note.category === filterCategory)
        }
        setNotesArray={setNotesArray}
        handleSearchNote={setSearchText}
        />
      }
    </div>
  );
}

export default App;
