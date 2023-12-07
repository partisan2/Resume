import React from "react";
import {Col, Container, Image } from "react-bootstrap";
import image from "./image.jpeg";
import { ImGithub } from "react-icons/im";
import { FaLinkedin,FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from '../sampleData/resume.pdf' 



function AboutMe() {
  return (
    <Container className="d-flex h-100" style={{width:'100vw',margin:0,height:'100vh'}}>
      <Container className="d-flex align-items-center justify-content-center mw-30 h-100">
          <Image src={image} style={{ maxWidth: "300px" }} rounded />
      </Container>
      <Container className="d-flex align-items-center justify-content-center mw-60">
        <Container>
            <h1>Hi! I'm Vihan Gayathra</h1>
            <Container>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis venenatis dictum. 
            Integer pharetra posuere pharetra. Vivamus eget nunc turpis. Nam rhoncus libero arcu, eget malesuada elit semper ac. 
            Donec vitae interdum mauris. Nulla vestibulum pharetra mauris, ac condimentum mauris blandit vitae. Pellentesque non neque mi. Proin elementum sit amet elit in ultrices. Curabitur accumsan, 
            sapien sed imperdiet rutrum, magna velit tincidunt enim, ut sagittis mi sem non lorem.
            </Container>
            <Col className="mt-3">
              <span className='m-3' style={{width:'100px'}}><Link to='' target="-blank"><ImGithub style={{width:38,height:38,color:'#000'}}/></Link></span>
              <span className='m-3' style={{width:'100px'}}><Link to='' target="-blank"><FaLinkedin style={{width:38,height:38,color:'blue'}}/></Link></span>
            </Col>
            <Col className="d-flex align-items-center justify-content-center mt-3">
              <span>Download CV<Link to={resume} target="_blank"><FaFileDownload style={{width:20,height:20,color:'#000'}}/></Link></span>
            </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
