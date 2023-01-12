import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Container>
  );
}

export default App;
