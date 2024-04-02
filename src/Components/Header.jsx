import React from 'react'
import{Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar className="bg-primary">
            <Container fluid className='mx-5'>
                <Navbar.Brand>
                  <Link to={'/'} style={{color:'white',textDecoration:'none'}} className='fw-bold'>
                      <i class="fa-solid fa-photo-film fa-beat me-2 ps-3"></i>
                      Media Player
                  </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header