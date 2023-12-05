import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useAuth } from '../contexts/AuthContext';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [ loading,setLoading ] = useState()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setLoading(true)
            const res = await signup(emailRef.current.value,passwordRef.current.value)
         try{
            await setDoc(doc(db,"Admin",res.user.uid),{
                email: emailRef.current.value,
                timeStamp: serverTimestamp()
            })
            navigate('/signin')
         }catch(r){console.log(r)}
        }catch(r){console.log(r)}
        setLoading(false)
    }
    
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <Card style={{width:'18rem'}}>
            <Card.Header>
                <Card.Title className='text-center mb-4 blue' style={{color:"blue" , marginTop:'5px'}}>Sign Up</Card.Title>
            </Card.Header>
            <Card.Body>
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
                        <Button disabled={loading} variant='primary' type='submit' style={{margin:'10px'}}>Sign Up</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default SignUp
