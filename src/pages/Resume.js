import React from 'react'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Projects from './components/Projects'

function Resume() {
  return (
    <>
    <div style={{height:'100vh',width:'100vw',backgroundPosition:'center',backgroundSize:'cover',color:'#000'}}>
      <AboutMe/>
    </div>
    <div style={{minHeight:'auto',width:'100vw'}}>
      <Projects/>
    </div>
    <div style={{minHeight:'100vh',width:'100vw'}}>
      <Education/>
    </div>
    </>
  )
}

export default Resume
