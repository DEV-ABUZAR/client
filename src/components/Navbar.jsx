import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className="bg-black text-white text-lg-start p-4">
        <Link to='/update'>
       <h2 style={{textDecoration:'none' }}> EZ-Group Booking</h2>
       </Link>
       <div style={{display:'flex', justifyContent:'space-around'}}>
       <Link to='/' className='ml-2'>Dtails</Link>
       <Link to='/login'>LoGIN</Link>
       <Link to='/data'>Data</Link>
       </div>
    </div>
    </>
  )
}

export default Navbar