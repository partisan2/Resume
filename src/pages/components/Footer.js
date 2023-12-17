import React from 'react'
import { Container } from 'react-bootstrap'
import { FaLinkedin,FaFacebook } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{width:'100vw',height:'100h'}}>
      <Container className='d-flex align-items-center justify-content-center m-3'>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <span className='text-black d-block' style={{fontSize:'24px',padding:'20px'}}>Contact Me</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to='https://github.com/partisan2' target="_blank"><ImGithub style={{width:38,height:38,color:'#000'}}/></Link>
                    </td>
                    <td>
                    <Link to='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target="_blank"><FaLinkedin style={{width:38,height:38,color:'#0077b5'}}/></Link>
                    </td>
                    <td>
                    <Link to='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target="_blank"><FaFacebook style={{width:38,height:38,color:'#000'}}/></Link>
                    </td>
                </tr>
            </tbody>
      </Container>
    </Container>
  )
}

export default Footer
