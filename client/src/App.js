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
      filterComplete,
      setFilterComplete,
      sortByComplete,
     } = NoteState()

  const [searchText, setSearchText] = useState('');
  // const [filterComplete, setFilterComplete] = useState();
  console.log(filterComplete);

  useEffect(() => {
    axios 
        .get("http://localhost:8000/api/note")
        .then((res) => {
          setNotesArray(res.data);
        })
        .catch((err) => console.log(err))
  }, [setNotesArray])


  // write function to filter notes by complete status

  // const filterByComplete = () => {
  //   if (filterComplete === false) {
  //     return notesArray.filter(note => note.complete === false)
  //   } else if (filterComplete === true) {
  //     return notesArray.filter(note => note.complete === true)
  //   } else {
  //     return notesArray
  //   }
  // }

  // useEffect(() => {
  //   let notesArrayCopy = [...notesArray];
  //   const filteredNotes = notesArrayCopy.filter(note => note.complete === filterComplete);
  //   setNotesArray(filteredNotes);

  // }, [filterComplete, setNotesArray])

  // useEffect(() => {
  //   if (filterComplete === true) {
  //     setNotesArray(notesArray.filter((note) => note.complete === true));
  //   } else if (filterComplete === false) {
  //     setNotesArray(notesArray.filter((note) => note.complete === false));
  //   } else {
  //     setNotesArray(notesArray);
  //   }
  //   console.log("sort complete");

  // }, [ filterComplete, setFilterComplete ]);

//   const sortByComplete = (e) => {
//     console.log(e.target.value);
//     switch (e.target.value) {
//       case "completed": 
//         setNotesArray(notesArray.filter((note) => note.complete));
//         break;
//       case "uncompleted":
//         setNotesArray(notesArray.filter((note) => !note.complete));
//         break;
//         default: 
//         setNotesArray(notesArray);
//   }
// }

  console.log(notesArray);

  return (
    <div className="App">
        <SideBar />
        <NoteList 
         notesArray={
            filterCategory === "" ? notesArray.filter(note => note.text.toLowerCase().includes(searchText)) 
            :
            notesArray.filter(note => note.text.toLowerCase().includes(searchText)) &&
            notesArray.filter(note => note.category === filterCategory)
            }
          setNotesArray={setNotesArray}
          handleSearchNote={setSearchText}
          // filterComplete={filterComplete}
          // setFilterComplete={setFilterComplete}
          // sortByComplete={sortByComplete}
        /> 
    </div>
  );
}


export default App;
