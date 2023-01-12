import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate ("/")
     } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser); 
    })
    return ()=>{
      unSubscribe();
    };
  },[]);
  
  
  return (
    <>
    <Card>
      <Card.Body>
      <h1 className="text-center" >Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>
      </Form>
      </Card.Body>
      <Button className="w-100 mt-2" >Login</Button>
      <div className="text-center">
        you need an account?<Link to="/signup"> Signup</Link>
      </div>
      </Card>
    </>
  )
}

export default Login