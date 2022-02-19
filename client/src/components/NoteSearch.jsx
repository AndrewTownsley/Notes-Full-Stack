import React from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { NoteState } from '../Context'


const NoteSearch = ({ 
        handleSearchNote
    }) => {

    const {
        open,
        setOpen,
        handleCategorySort,
        setFilterComplete
    } = NoteState();

    return (
        <div className="note-search">
        <div className="note-search-container">
            <div className="note-search-mobile-header">
                <HiPlusCircle 
                    onClick={ !open ? () => setOpen(true) : () => setOpen(false)}
                    open={open}
                    className="burger-icon"
                />
                <h1>noteflix</h1>
            </div>
            <input 
                className="note-search-input"
                onChange={(event) => handleSearchNote(event.target.value)} 
                type="text" 
                name="search" 
                id="note-search" 
                placeholder="Search Notes..."
                />

    
             <select onChange={(e) =>setFilterComplete(e.target.value)} className="note-search-category note-input-select" name="complete-sort" id="complete-sort">
                <option value="">Filter Completed Notes</option>
                <option value="">Show All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select> 

         

            <select onChange={handleCategorySort} className="note-search-category note-input-select" name="category-sort" id="category-sort">
                <option value="">Filter by Category</option>
                <option value="">Show All</option>
                <option value="Important">Important !!</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
                <option value="Home">Home</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </div>
    )
}

export default NoteSearch
