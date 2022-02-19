import { nanoid } from "nanoid";
import Note from "./Note";
import NoteSearch from "./NoteSearch";
import EditNote from './EditNote';
import { NoteState } from "../Context";


const NoteList = ({
        notesArray,
        handleSearchNote,
        filterComplete,
        setFilterComplete,
    }) => {

    const {
        handleCategorySort,
        open, 
        setOpen, 
        openEdit,
    } = NoteState();


    return(
        <section className="notes-list-container" onClick={ open ? () => setOpen(false) : null}
        open={open}>
            <NoteSearch
                open={open}
                setOpen={setOpen}
                handleSearchNote={handleSearchNote}
                handleCategorySort={handleCategorySort}
                filterComplete={filterComplete}
                setFilterComplete={setFilterComplete}
            />

            {
                openEdit ? 
                (
                    <EditNote />
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
                                    />
                })}
            </div>
                )
            }
        </section>
    )
}

export default NoteList;

                    