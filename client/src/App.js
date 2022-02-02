import React, { useState, useEffect } from 'react';
import axios from "axios";  
import "./App.css";
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import { NoteState } from './Context';


function App() {
   const {
      notesArray,
      complete,
      filterCategory,
      setNotesArray,
     } = NoteState()

  const [searchText, setSearchText] = useState('');
  const [filterComplete, setFilterComplete] = useState(false);
  console.log(filterComplete);

  useEffect(() => {
    axios 
        .get("http://localhost:8000/api/note")
        .then((res) => {
          setNotesArray(res.data);
        })
        .catch((err) => console.log(err))
  }, [setNotesArray])


  // write a useEffect function to filter the notes based on the complete status,
  //then rerender the notesArray
  useEffect(() => {
    if (filterComplete === true) {
      setNotesArray(notesArray.filter((note) => note.complete === true));
    } else {
      setNotesArray(notesArray.filter((note) => note.complete === false));
    }
  }, [ filterComplete])


  console.log(notesArray);

  return (
    <div className="App">
        <SideBar />
        <NoteList 
        // switch statement to filter notes based on complete status and category
         notesArray={
            filterCategory === "" ? notesArray.filter(note => note.text.toLowerCase().includes(searchText)) 
            :
            notesArray.filter(note => note.text.toLowerCase().includes(searchText)) &&
            notesArray.filter(note => note.complete !== filterComplete)
            }
          setNotesArray={setNotesArray}
          handleSearchNote={setSearchText}
          filterComplete={filterComplete}
          setFilterComplete={setFilterComplete}
          // sortByComplete={sortByComplete}
        /> 
    </div>
  );
}


export default App;
