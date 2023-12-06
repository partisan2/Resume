import React from 'react'
import { Container,Card, Accordion, AccordionItem, ListGroup } from 'react-bootstrap'


function Education() { 


  return (
    <>
        <hr/>
        <h1 className='text-center'>Education</h1>
        <Container className='h-100 d-flex' >
            <Container className='d-flex align-items-center justify-content-center'>
                <Card style={{maxWidth:'18rem'}}>
                    <Accordion className='m-3'>
                        <AccordionItem eventKey='0'>
                            <Accordion.Header>
                                Advanced Level
                            </Accordion.Header>
                            <Accordion.Body>
                                I have completed my advanced level in Science Stream in,
                                <br/>
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
            <Container className='d-flex align-items-center justify-content-center'>
                <Card>
                    <Accordion className='m-3'>
                        <Accordion.Header>
                            Bachelor Of Software Engineering
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup as='ul'>
                               <ListGroup.Item>Communication Skills</ListGroup.Item>
                               <ListGroup.Item>Economics and Marketing for Engineering</ListGroup.Item>
                               <ListGroup.Item>Computer Security Concepts</ListGroup.Item>
                               <ListGroup.Item>Introduction to object oriented programming</ListGroup.Item>
                               <ListGroup.Item>Information systems and data management</ListGroup.Item>
                               <ListGroup.Item>Introduction to Mobile Application Development</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion>
                </Card>
            </Container>
        </Container>
    </>
  )
}

export default Education
