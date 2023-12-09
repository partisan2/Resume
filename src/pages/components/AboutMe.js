import React from "react";
import {Col, Container, Image } from "react-bootstrap";
import image from "./image.jpeg";
import { ImGithub } from "react-icons/im";
import { FaLinkedin,FaFileDownload,FaHtml5,FaCss3Alt,FaJava,FaPython,FaReact } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import { SiJavascript,SiMysql  } from "react-icons/si";
import { Link } from "react-router-dom";
import resume from '../sampleData/resume.pdf' 



function AboutMe() {
  return (
    <Container className="d-flex h-100" style={{width:'100vw',margin:0,height:'100vh'}}>
      <Container className="d-flex align-items-center justify-content-center mw-30 h-100 ">
          <Image src={image} style={{ maxWidth: "300px" }} rounded className="shadow-lg"/>
      </Container>
      <Container className="d-flex align-items-center justify-content-center mw-60">
        <Container>
            <h1>Hi! I'm Vihan Gayathra</h1>
            <Container>
            I am Vihan, an ambitious and dedicated undergraduate software engineer with a passion for crafting innovative solutions through code. 
            As a current student pursuing Bachelor of Software Engineering degree at OUSL, I have honed my skills in software development and am excited to bring my enthusiasm for 
            technology to real-world applications.
            </Container>
            <Col className="mt-3">
              <span className='m-3' style={{width:'100px'}}><Link to='https://github.com/partisan2' target="_blank"><ImGithub style={{width:38,height:38,color:'#000'}}/></Link></span>
              <span className='m-3' style={{width:'100px'}}><Link to='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target="_blank"><FaLinkedin style={{width:38,height:38,color:'#0077b5'}}/></Link></span>
            </Col>
            <Col className="mt-5">
              <span className="m-3"><FaHtml5 style={{width:26,height:26,color:'#FF4500'}}/></span>
              <span className="m-3"><FaCss3Alt style={{width:26,height:26,color:'blue'}}/></span>
              <span className="m-3"><SiJavascript style={{width:26,height:26,color:'orange'}}/></span>
              <span className="m-3"><FaJava style={{width:26,height:26,color:'black'}}/></span>
              <span className="m-3"><FaPython style={{width:26,height:26}}/></span>
              <span className="m-3"><FaReact style={{width:26,height:26}}/></span>
              <span className="m-3"><SiMysql  style={{width:26,height:26}}/></span>
              <span className="m-3"><TbCircleLetterC  style={{width:26,height:26}}/></span>
            </Col>
            <Col className="d-flex align-items-center justify-content-center mt-3">
              <span>Download CV<Link to={resume} target="_blank"><FaFileDownload style={{width:20,height:20,color:'primary'}}/></Link></span>
            </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
