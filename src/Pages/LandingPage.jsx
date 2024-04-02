import React from 'react'
import { Row ,Col,Button,Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigateByUrl = useNavigate();
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
            <h1 className='mb-5' style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
            <p>Are you ready to immerse yourself in a world of entertainment? Look no further! Our platform offers a seamless and enjoyable media experience, tailored just for you.</p>
            <p>But that's not all! Our advanced features allow you to create personalized playlists, bookmark your favorite tracks, and even share your discoveries with friends and family.</p>

            <p>Join us on a journey of endless possibilities. Sit back, relax, and let <span className='text-info'>Media Player</span> be your ultimate destination for all things entertainment.</p>

            <p>Get ready to press play and let the magic unfold!</p>
            {/*<Link to={'/home'}><button className='btn btn-primary mt-4'>Get Started</button></Link>*/}
            <button onClick={()=>navigateByUrl('./home')} className='btn btn-primary mt-4'>Get Started</button>
        </Col>
        <Col lg={5} className='ps-5'>
            <img src="/media-player.gif" style={{height:'450px'}} alt="gif image for media player landing page" />
        </Col>
        <Col></Col>
        <Col></Col>
    </Row>

    
    <Row className='w-100'>
        <div className="my-5 container-fluid d-flex flex-column  justify-content-center p-0 w-100">
            <h3 className='ms-5' style={{fontSize:'35px',paddingLeft:'1.8rem'}}>Features</h3>  
            <div className="mb-4 mt-2 d-flex align-items-center justify-content-between w-100 px-5 mx-2">
            
            <Card style={{ width: '22rem' }} className='m-4'>
                <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="/1st_gif.gif"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} className='m-4'>
                <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="/2nd_gif.gif"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem' }} className='m-4'>
                <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="/3rd_gif.gif"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
            </div>
        </div>
    </Row>
    <Row className='w-100'>
        <Col lg={12} className='d-flex justify-content-center align-items-center mb-5 p-0'>           
        <div className="container mx-3 border rounded p-5 border-light d-flex align-items-center justify-content-between w-100">
            <div className="col-lg-5">
                <h4 className='text-warning mb-3'>Simple,Powerful & Fast</h4>

                <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam quia at, fuga laudantium tempora architecto odio eum eligendi nihil odit ab unde, neque magnam provident sed. Esse, dolorum autem.</h6>

                <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam quia at, fuga laudantium tempora architecto odio eum eligendi nihil odit ab unde, neque magnam provident sed. Esse, dolorum autem.</h6>

                <h6 className='mb-2 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam quia at, fuga laudantium tempora architecto odio eum eligendi nihil odit ab unde, neque magnam provident sed. Esse, dolorum autem.</h6>
            </div>
            <div className="video col-lg-6">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/ccpVpcP8m44?si=oSaor0Esc3m1C9oe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </Col>
    </Row>
    </>
  )
}

export default LandingPage