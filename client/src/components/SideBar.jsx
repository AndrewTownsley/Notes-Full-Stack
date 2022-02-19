import NoteInput from "./NoteInput";
import { NoteState } from "../Context";

const SideBar = () => {
        const {
            handleTextChange, 
            handleTitleChange, 
            noteText, 
            noteTitle, 
            setCategory, 
            saveNote, 
            open
        } = NoteState();

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
        </div>
    )
}

export default SideBar;