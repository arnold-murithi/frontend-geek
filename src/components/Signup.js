import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from '../firebase'
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e){
    e.preventDefault()
  }

  const createUser = async () =>{
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <Card>
      <Card.Body>
      <h1 className="text-center" >Signup</h1>
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
      <Button className="w-100 mt-2" onClick={createUser}>Signup</Button>
      <div className="text-center">Already have an account? <Link to="/login">Login</Link></div>
      </Card>
    </>
  );
}

export default Signup;