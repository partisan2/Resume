import React from "react";
import {Container, Image } from "react-bootstrap";
import image from "./image.jpeg";


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
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
