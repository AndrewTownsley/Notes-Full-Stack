import React from 'react'

const Edit = ({saveNote, noteText, noteTitle, handleTitleChange, handleTextChange, handleCategoryChange}) => {
    return (
        <div className="note-input">
        <h1>noteflix</h1>
            <label htmlFor="note-title">
              </label>
              <input
               onChange={handleTitleChange} 
               value={noteTitle} 
               type="text" id="note-title" name="note-title" placeholder="Title..." 
               autoComplete="off" 
              />
            <textarea 
              onChange={handleTextChange}
              value={noteText} 
              rows="6" cols="20" 
              placeholder="Enter note here..." 
              name="note" 
              id="note-input"
              autoFocus={true} >
              </textarea>
              <select className="note-input-select" onChange={handleCategoryChange} name="category" id="categorySelect">
                <option value="">Category</option>
                <option value="Important">Important !</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
                <option value="Home">Home</option>
                <option value="Personal">Personal</option>
                <option value="Misc">Misc</option>
              </select>
            <button className="save-btn" onClick={saveNote}><FaPlus className="plus"/>Save Note</button>
    </div>
    )
}

export default Edit;
