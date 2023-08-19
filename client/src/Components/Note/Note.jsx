import './Note.css'
import { useState,useContext } from "react";
import notecontext from "../../contexts/notes/notecontext";
import { useParams } from 'react-router-dom';
const Note=()=>{
   const context = useContext(notecontext)
   const {notes} = context
   const obj = useParams();
  const  note=notes.find((element) =>element._id===obj.id)
    return(
        <div className='Home'>
           
            <div className='note'>Your Task</div> 
            <div className='itemname'>     
             <div className='title'>{note.title}</div>
          <div>
           <div className='descrp'>Task : {note.description}</div>
          </div> 
          </div>
        </div>
    )
}
export default Note