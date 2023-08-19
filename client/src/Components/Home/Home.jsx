
import "./Home.css"
import Addnote from '../Addnote/Addnote'
import { useContext, useEffect } from "react"
import notecontext from "../../contexts/notes/notecontext"


const Home=()=>{
const context = useContext(notecontext)
const {getname}= context
   useEffect(()=>{
        getname();
       })
    return (
     <div className="Home">
        <Addnote/>
        </div> 
    )
}
export default Home