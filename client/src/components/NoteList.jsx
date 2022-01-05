import { nanoid } from "nanoid";
import Note from "./Note";
import NoteSearch from "./NoteSearch";
import EditNote from './EditNote';


const NoteList = ({ id, handleTitleChange, handleTextChange, noteTitle, noteText, notesArray, setNotesArray, handleSearchNote, handleCategorySort, open, setOpen, deleteNote, complete, setComplete, completeNote, completeNoteStyle, editNote, openEdit, setOpenEdit }) => {


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
                    <EditNote 
                        id={id}
                        editNote={editNote}
                        openEdit={openEdit} 
                        setOpenEdit={setOpenEdit}
                        handleTextChange={handleTextChange}
                        handleTitleChange={handleTitleChange}
                        noteTitle={noteTitle}
                        noteText={noteText}  
                        notesArray={notesArray}  
                        setNotesArray={setNotesArray}  
                    >
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
                    setOpenEdit={setOpenEdit}
                    />
                })}
            </div>
                )
            }
        </section>
    )
}

export default NoteList;

                    