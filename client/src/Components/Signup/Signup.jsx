import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import notecontext from "../../contexts/notes/notecontext";

const Signup=()=>{
    const context = useContext(notecontext)
    const {setname}=  context
    const [credentials,setcredentials]=useState({Name:'',email:'',password:''})
    let NavigateTo = useNavigate();
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name] : e.target.value})
    }
    const handlesubmit=async (e)=>{
    e.preventDefault();  
    const response= await fetch("http://localhost:5000/auth/signup",{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        'token':`${localStorage.getItem('token')}`
    },
    body: JSON.stringify({Name:credentials.Name,email : credentials.email,password:credentials.password})})
    const json= await response.json()
    console.log(json)  ;
    if(json.success){
        setname(json.user.Name)
        localStorage.setItem('token',json.authtoken);
        NavigateTo("/")
    }
    else{
        alert('error')
    }
};
   
return(
    <>
    <div className="login">
    <form  onSubmit={handlesubmit}>
    <div className="loginbox">
    <div className="signin" >Create Account</div>
         <input className="input" type='text'  onChange={onchange} id ="Name" name="Name" placeholder="Enter your name"/>
         <input className="input"type='text' onChange={onchange} id="email" name="email"placeholder="Enter your email"/>
         <input className="input" type='text' onChange={onchange} id="password" name="password" placeholder="Enter your password"/>
         <button className="btn3">Signup</button>
         </div>
        </form>
        </div>
        </>
)
}
export default Signup