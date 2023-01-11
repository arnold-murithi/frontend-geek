import React from 'react'
import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()



  function handleSubmit (e){
    e.preventDefault()
  }

  const loginUser = async () =>{
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }
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
      <Button className="w-100 mt-2" onClick={loginUser}>Login</Button>
      <div className="text-center">Forgot password</div>
      </Card>
    </>
  )
}

export default Login