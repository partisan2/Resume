import React from "react";
import {
  Container,
  Card,
  Accordion,
  AccordionItem,
  ListGroup,
} from "react-bootstrap";
import { moduleList } from "../sampleData/moduleList";

function Education() {
  return (
    <>
      <hr />
      <h1 className="text-center">Education</h1>
      <Container className="h-100 d-flex mb-4">
        <Container className="d-flex align-items-center justify-content-center">
          <Card style={{ maxWidth: "18rem" }}>
            <Card.Header className="bg-primary text-white">Advanced Level</Card.Header>
            <Card.Body>
                  I have completed my advanced level in Science Stream.
            </Card.Body>
            <Accordion className="m-3">
              <AccordionItem eventKey="0">
                <Accordion.Header>Subjects</Accordion.Header>
                <Accordion.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item>Biology</ListGroup.Item>
                    <ListGroup.Item>Chemistry</ListGroup.Item>
                    <ListGroup.Item>Physics</ListGroup.Item>
                  </ListGroup>
                  <span>Richmond College Galle</span>
                </Accordion.Body>
              </AccordionItem>
            </Accordion>
          </Card>
        </Container>
        <Container className="d-flex align-items-center justify-content-center">
          <Card>
            <Card.Header className="bg-primary text-white">
                Bachelor Of Software Engineering
            </Card.Header>
            <Accordion className="m-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Completed Courses
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup as="ul">
                    {moduleList?.map((Item) => {
                      return <ListGroup.Item key={Item.id}>{Item.moduleName}</ListGroup.Item>;
                    })}
                  </ListGroup>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Education;
