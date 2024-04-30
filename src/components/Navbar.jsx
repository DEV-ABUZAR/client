import React from 'react'
import { BrowserRouter as Router, Link, Route, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar() {
  const navigate = useNavigate()
  const details = ()=>{
    navigate('/details')
  }
  const Logout = () => {
    localStorage.removeItem('token');
    toast.success('Logged Out ')
    navigate('/')
    
   
  };
  return (
    <>
    <div className="bg-black text-white text-lg-start p-4 d-flex justify-content-between">
       
       <h2 style={{textDecoration:'none', cursor:'pointer' }} onClick={details}> EZ-Group Booking</h2>
       <img src="/right.png" alt="logout" width={40} style={{cursor:'pointer', height:'100%'}} onClick={Logout} />
    </div>
    </>
  )
}

export default Navbar