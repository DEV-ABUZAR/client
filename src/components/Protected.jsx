import React from 'react'
import {Navigate , Outlet} from 'react-router-dom'
import toast from 'react-hot-toast'
function Protected() {
 
    const token = localStorage.getItem('token')
    if(!token){
        toast.error('Your are not logged in')

return <Navigate to='/' />

    }
  return (
    
    <Outlet/ >
    
  )
}

export default Protected 