import NoteInput from "./NoteInput";
// import NoteHistory from "./NoteHistory";
// import { NoteState } from "../Context";

const SideBar = ({ handleTextChange, handleTitleChange, noteText, noteTitle, setCategory, saveNote, notesArray, deleteNote, open}) => {
        // const {handleTextChange, handleTitleChange, noteText, noteTitle, setCategory, saveNote, notesArray, deleteNote, open} = NoteState();

    return (
        <div className={open ? "sidebar openSidebar" : "sidebar"}>
            <NoteInput 
                handleTextChange={handleTextChange}
                handleTitleChange={handleTitleChange}
                noteText={noteText}
                noteTitle={noteTitle}
                setCategory={setCategory}
                saveNote={saveNote}
            />
            {/* <NoteHistory
                notesArray={notesArray}
                deleteNote={deleteNote}
            /> */}
        </div>
    )
}

export default SideBar;