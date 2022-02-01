import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { RiCheckLine } from 'react-icons/ri';
import { NoteState } from '../Context';


const Note = (
  { id, index, note,
  //  deleteNote,
  //   completeNote, completeNoteStyle, complete, setComplete, editNote, openEdit, setOpenEdit
   }
  ) => {
  const {
    deleteNote, completeNote, completeNoteStyle, complete, setComplete, editNote, openEdit, setOpenEdit, 
  } = NoteState();


    return (
          <article 
              // className={ !complete ? 'note' : 'note note-complete'} 
              className={completeNoteStyle(index)} 
              key={note._id}>  
            <div className="note-header">
              <div className="note-header-title">
                <h5 className={note.category}>{note.category}</h5>
                <h3>{note.title}</h3>
                {/* <h3>{note.title.substring(0,30)}</h3> */}
              </div>
                <RiCheckLine style={{color: "#3cc47c"}}
                  // onClick={!complete ? () => setComplete(true) :() => setComplete(false)}  className="pin-icon complete-container"/>
                  onClick={() => completeNote(index)}  className="pin-icon complete-container"/>
                  
            </div>
            <p>{note.text}</p>
            {/* <p>{note.text.substring(0, 50)}</p> */}
            <div className="note-footer">
              <p>{note.date}</p>
              <div className="note-footer-icon-container">
                <MdEdit className="edit-btn" onClick={() => editNote(note._id)} />
                <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note._id)}/>
              </div>
            </div>
          </article>
        )
    }
      
         


export default Note;



