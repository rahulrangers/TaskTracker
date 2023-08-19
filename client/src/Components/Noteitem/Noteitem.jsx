import "./Noteitem.css"
import { useState,useContext } from "react";
import notecontext from "../../contexts/notes/notecontext";
import { Link } from "react-router-dom";
const Noteitem=(props)=>{
    const context =useContext(notecontext)
    const {deletenote} = context
    const {note}=props;
    const delete_note=()=>{
         deletenote(note._id)
    }
    
   return(
    <div className="box">
    <div className="title">{note.title}</div>
    <div className="descrp">Task : {note.description.slice(0,90)}....</div>
     <div className="change">
    <button className='item' onClick={delete_note}>Delete</button>
    <Link to={`/note/${note._id}`}>
    <button className="item">View</button>
    </Link>

    </div>
    </div>
   )

}
export default Noteitem