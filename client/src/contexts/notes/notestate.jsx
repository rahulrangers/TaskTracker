import react, { useEffect, useState } from "react"
import Notecontext from "./notecontext"
const Notestate =(props)=>{
  
const note= []
const [notes,setnotes]=useState(note)
const [Username,setname]=useState('')  
const getname=async()=>{
    const response= await fetch("http://localhost:5000/auth/getuser",{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        'token':`${localStorage.getItem('token')}`
    },
   })
    const json= await response.json()
    setname(json.Name)
}
const getnote=async(note)=>{
    const response = await fetch("http://localhost:5000/data/fetchnotes",{
       method:'GET',
       headers:{
        'Content-Type':'application/json',
        'token': `${localStorage.getItem('token')}`
       }

    });
    const json = await response.json()
    console.log(json)
    setnotes(json)
}

const addnote=async(note)=>{
    const response = await fetch("http://localhost:5000/data/write",{
       method:'POST',
       headers:{
        'Content-Type':'application/json',
        'token': `${localStorage.getItem('token')}`
       },
       body:JSON.stringify(({title:note.title,description:note.description}))
    });
    const newnote = await response.json()
 setnotes(notes.concat(newnote))
}
const deletenote=async(id)=>{
    const response = await fetch(`http://localhost:5000/data/delete/${id}`,{
       method:'DELETE',
       headers:{
        'Content-Type':'application/json',
        'token': `${localStorage.getItem('token')}`
       },
    });
     getnote()   
    setnotes(notes)
}

    return(
        <Notecontext.Provider value ={{notes,setnotes,addnote,deletenote,getnote,Username,setname,getname}}>
           { props.children}
        </Notecontext.Provider>
    )
}
export default Notestate;