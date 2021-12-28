import { nanoid } from "nanoid";
import Note from "./Note";
import NoteSearch from "./NoteSearch";


const NoteList = ({ notesArray, setNotesArray, handleSearchNote, handleCategorySort, open, setOpen, deleteNote, complete, setComplete, completeNote }) => {


    return(
        <section className="notes-list-container" onClick={ open ? () => setOpen(false) : null}
        open={open}>
            <NoteSearch
                open={open}
                setOpen={setOpen}
                handleSearchNote={handleSearchNote}s
                handleCategorySort={handleCategorySort}
            />

            <div className="pinned-notes-container">
            </div>
            <div className="notes-list">
                {notesArray.map((note, index) => {
                return  <Note 
                            index={index}
                            key={nanoid()}
                            id={nanoid()}
                            note={note}
                            noteTitle={note.noteTitle}
                            title={note.title}
                            category={note.category}
                            text={note.text}
                            deleteNote={deleteNote}
                            complete={complete}
                            setComplete={setComplete}
                            completeNote={completeNote}
                            setNotesArray={setNotesArray}
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;

                    