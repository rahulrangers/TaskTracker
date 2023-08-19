import { useState } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import {BrowserRouter,Route,Link,Routes} from "react-router-dom";
import Newstate from "./contexts/notes/notestate"
import Login from "./Components/Login/Login"
import Notes from './Components/Notes/Notes'
import Signup from "./Components/Signup/Signup"
import Note from "./Components/Note/Note"

function App(){

  return (
    <>
    <Newstate>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/signup' element ={<Signup/>}/>
      <Route path='/notes' element ={<Notes/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/note/:id' element={<Note/>} />
    </Routes>
    </BrowserRouter>
    </Newstate>
    </>
  )
}

export default App
