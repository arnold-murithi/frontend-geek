
import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Dashboard() {
  const navigate = useNavigate();

  const logout = async () =>{
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
      <div>
        <h2>This is the profile</h2>
        <button onClick={logout}>logout</button>
      </div>
  )
}

export default Dashboard