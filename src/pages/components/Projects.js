import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { projectList } from '../sampleData/moduleList'

function Projects() {
    console.log(projectList?.map(Item => ({name : Item.projectName,tools :Item.projectTools})))
  return (
    <div className='m-3'>
        <hr/>
        <h1 className='text-center'>Projects</h1>
      <Container className='d-flex' style={{flexWrap:'wrap',alignContent:'center'}}>
        {projectList?.map((item)=>{
            return <Card className='m-2' style={{maxWidth:"18rem",minHeight:'24rem'}}>
                    <Card.Header className='text-center text-white bg-primary'>{item.projectName}</Card.Header>
                    <Card.Body className='m-2'>
                        <Col>
                            <Row className='mb-3'>{item.projectDiscription}</Row>
                            <Row>
                                <ListGroup as='ul'>
                                    {item.projectTools?.map((tool)=>{
                                       return <ListGroup.Item>{tool.tool}</ListGroup.Item>
                                    })}
                                </ListGroup>
                            </Row>
                        </Col>
                    </Card.Body>
                    </Card>
        })}
      </Container>
    </div>
  )
}

export default Projects
