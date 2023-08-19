import { useContext } from "react"
import notecontext from '../../contexts/notes/notecontext'
import Noteitem from "../Noteitem/Noteitem"
import "./Notes.css"
const Notes =()=>{
 
    const context = useContext(notecontext)
    const {notes , getnote} = context
    
  return(
    <div className='Home'>
    <div className="note">Your Tasks</div>
    <div className="container">
        {notes.map((note)=>{
        return <Noteitem note={note}/>
        })}
        </div>
        </div>
  )
}
export default Notes