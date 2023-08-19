import React, { useContext, useEffect } from 'react'
import './Navbar.css'
import {Link, useNavigate } from 'react-router-dom'
import notecontext from '../../contexts/notes/notecontext'
const Navbar=()=>{
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  const context = useContext(notecontext)
  const {getname,Username}=context
  useEffect(()=>{
   getname();
  }
  ,[])
   return(
    <>
    <nav className='navbar'>
  <ul>
    <Link to='/'>
    <li>AddTask</li>
    </Link>
    <Link to='/about'>
    <li>About</li>
    </Link>
  </ul>
  {!localStorage.getItem('token')?
  <div className='right'>
    
    <Link to ='/login'>
  <button className='btn4'>Login</button>
  </Link>
  <Link  to = '/signup'>
  <button className='btn4'>Signup</button>
  </Link>
  </div>
  : 
  <div className='right'>
  <button className='btn4'> {Username} </button>
  <Link  to = '/notes'>
  <button className='btn4'>Your Tasks</button>
  </Link>
  <button className='btn4' onClick={logout}>Logout</button>
  </div>
  }
    </nav>
    </>
   )
}
export default Navbar
