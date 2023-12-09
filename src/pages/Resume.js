import React from 'react'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Projects from './components/Projects'
import {Navbar, Container, Nav } from "react-bootstrap";
import Footer from './components/Footer';



function Resume() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to='#home'>Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    <div style={{height:'100vh',width:'100vw',backgroundPosition:'center',backgroundSize:'cover',color:'#000'}} id='home'>
      <AboutMe/>
    </div>
    <div style={{minHeight:'auto',width:'100vw'}} id='projects'>
      <Projects/>
    </div>
    <div style={{minHeight:'100vh',width:'100vw'}} id='education'>
      <Education/>
    </div>
    <div className='bg-dark ' style={{minHeight:'25vh',width:'100vw'}}>
      <Footer/>
    </div>
    </>
  )
}

export default Resume
