import React from 'react'
import AboutMe from './components/AboutMe'
import Education from './components/Education'

function Resume() {
  return (
    <>
    <div style={{height:'100vh',width:'100vw'}}>
      <AboutMe/>
    </div>
      <Education/>
    </>
  )
}

export default Resume
