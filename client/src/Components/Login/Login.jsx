import {  useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css"
const Login=()=>{
    const [credentials,setcredentials]=useState({email:'',password:''})
    let NavigateTo = useNavigate();
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name] : e.target.value})
    }
    const handlesubmit=async (e)=>{
    e.preventDefault();
    const response= await fetch("http://localhost:5000/auth/login",{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        'token':`${localStorage.getItem('token')}`
    },
    body: JSON.stringify({email : credentials.email,password:credentials.password})})
    const json= await response.json()
    if (json.success){
        console.log(json.user.Name)
       localStorage.setItem('token',json.authtoken)
     
       NavigateTo("/")
    }
    else{
        alert('invalid credentials')
    }
    console.log(json)   
};
    return(

        <div className="login">
        <form onSubmit={handlesubmit}>
            <div className="loginbox">
            <div className="header">Login</div>
         <input className="input" type='text' name="email" onChange={onchange} placeholder="Enter your email"/>
         <input className="input" type='text'name="password" onChange={onchange} placeholder="Enter your password"/>
         <button className="btn3">Login</button>
         </div>
        </form>
        </div>
       
    )
    }
    export default Login