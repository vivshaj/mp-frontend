import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <MDBFooter bgColor='primary' className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-reset'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Media-Player
              </h6>
              <p>
              At <span className='text-info fw-bold'>Media-Player</span>, we are passionate about delivering the best entertainment experience to our users. Explore our platform to discover a world of music, movies, podcasts, and more!
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to={'/'} style={{textDecoration:'none'}} className='text-reset'>Landing Page</Link>
              </p>
              <p>
                <Link to={'/home'} style={{textDecoration:'none'}} className='text-reset'>Home Page</Link>
              </p>
              <p>
                <Link to={'/watchhistory'} style={{textDecoration:'none'}} className='text-reset'>Watch History</Link>
              </p>
              <p>
                <a href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>GUIDES</h6>
              <p>
              <Link to={'https://react.dev/'} style={{textDecoration:'none'}} className='text-reset'>React</Link>
                
              </p>
              <p>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}} className='text-reset'>React Bootstrap</Link>
              </p>
              <p>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}} className='text-reset'>Bootswatch</Link>
              </p>
              <p>
              <Link to={'https://mdbootstrap.com/'} style={{textDecoration:'none'}} className='text-reset'>MDBootstrap</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <div className='d-flex'>
                  <input type="text" className='form-control w-75 me-2' placeholder='Enter your mail'/>
                  <button style={{fontSize:'14px'}}  className='btn btn-warning rounded subscribe py-1 px-2'>Subscribe</button>
                </div>
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Media-player.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer