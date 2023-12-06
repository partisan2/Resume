import React, { useRef, useState } from 'react'
import { Container,Card,Form,Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [ loading,setLoading ] = useState()
  const { signin } =useAuth()
  const navigate = useNavigate()
  const [ err,setErr ] = useState()

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setErr("")
    try{
      await signin(emailRef.current.value,passwordRef.current.value)
      navigate('/dashboard')
    }catch(r){
      console.log(r)
      setErr("Failed To SignIn")
    }
    setLoading(false)
  }
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <Card style={{width:'18rem'}}>
            <Card.Header>
                <Card.Title className='text-center mb-4 blue' style={{color:"blue" , marginTop:'5px'}}>Sign In</Card.Title>
            </Card.Header>
            <Card.Body>
            {err && <Alert variant='danger'>{err}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='example@email.com' ref={emailRef}/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='password' ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <Button disabled={loading} variant='primary' type='submit' style={{margin:'10px'}}>Sign In</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default SignIn
