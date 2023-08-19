import "./Addnote.css"
import { useState,useContext,useRef ,useEffect} from "react"
import notecontext from "../../contexts/notes/notecontext"
import { useNavigate } from "react-router-dom"
const Addnote = ()=>{
  const history = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')!=null){
  getnote()
    }
    else{ 
      history('/login')
    }
  },[])
  const inputref = useRef(null)
  const desref = useRef(null)
    const context = useContext(notecontext)
    const {addnote,getnote} = context;
    const [note,setnote]=useState({title:'',description:''})

    const handleclick=(e)=>{
     addnote(note);
     inputref.current.value='';
     desref.current.value='';
    }
    const onchange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }

    return(
       <>
        <div className="note">AddTask</div>
        <div className="addnote">
        <input ref={inputref} id="title" name="title" type="text" placeholder="ENTER TITLE" onChange={onchange}/>
                <textarea ref={desref} id="description" name="description" type="text" placeholder="ENTER DESCRIPTION" onChange={onchange}/>
                <button className="sub" onClick={handleclick}>Submit</button>
        </div>
        </> 
    )
}

export default Addnote;