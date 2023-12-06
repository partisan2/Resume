import React from 'react'
import { CardHeader, Container,Card, Accordion, AccordionItem } from 'react-bootstrap'

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
                            <span>Richmond College Galle</span>
                        </Accordion.Body>
                    </AccordionItem>
                </Accordion>
            </Card>
        </Container>
        <Container className='d-flex align-items-center justify-content-center'>
            <Card>
                <CardHeader>BSE</CardHeader>
            </Card>
        </Container>
    </Container>
    </>
  )
}

export default Education
