import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import {certficates} from '../sampleData/moduleList'

function Certificates() {
  return (
    <div>
      <hr />
      <h1 className="text-center">Certificates</h1>
      <Container className='d-flex align-items-center justify-content-center flex-wrap mb-2'>
        {certficates?.map((item)=>{
            return <Card key={item.id} className='m-2 shadow-lg'>
                <Card.Body>
                <Image src={item.certImage} style={{maxWidth:'20rem'}} />
                </Card.Body>
            </Card>
        })}
      </Container>
    </div>
  )
}

export default Certificates
