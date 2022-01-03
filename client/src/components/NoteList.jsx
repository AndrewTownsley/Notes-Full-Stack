import { nanoid } from "nanoid";
import Note from "./Note";
import NoteSearch from "./NoteSearch";


const NoteList = ({ notesArray, setNotesArray, handleSearchNote, handleCategorySort, open, setOpen, deleteNote, complete, setComplete, completeNote, completeNoteStyle, editNote, openEdit, setOpenEdit }) => {


    return(
        <section className="notes-list-container" onClick={ open ? () => setOpen(false) : null}
        open={open}>
            <NoteSearch
                open={open}
                setOpen={setOpen}
                handleSearchNote={handleSearchNote}s
                handleCategorySort={handleCategorySort}
            />
{/* 
            <div className="pinned-notes-container">
            </div> */}
            {
                openEdit ? 
                (
                    <EditNote className="edit-window">
                        <h1>update note</h1>
                        <button onClick={() => setOpenEdit(false)}>close</button>    
                    </EditNote>
                )
                : 
                (
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
                    completeNoteStyle={completeNoteStyle}
                    setNotesArray={setNotesArray}
                    editNote={editNote}
                    />
                })}
            </div>
                )
            }
        </section>
    )
}

export default NoteList;

                    