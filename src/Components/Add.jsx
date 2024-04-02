import React,{useState} from 'react'
import {Modal,Button, Form, FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })

  //console.log(uploadVideo)

  //https://www.youtube.com/watch?v=SMKPKGW083c
  //https://www.youtube.com/embed/SMKPKGW083c  // assuming video ID is always 11 characters 

  const getYoutubeEmbedLink=(e)=> {
    const {value} = e.target
    if(value.includes("v=")) {
      //let vId = value.split("v=")[1]
      let vId = value.split("v=")[1].slice(0,11)
      //console.log(vId)
      console.log(`https://www.youtube.com/embed/${vId}`)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vId}`})
    } else {
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd = async ()=> {
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link ) {
      alert("please fill the missing fields")
    } else {
      //store uploaded video to json server
      const result = await uploadVideoAPI(uploadVideo)
      //console.log(result)
      if(result.status >= 200 && result.status < 300) {
        //success
        alert("upload successful")
        handleClose();

        //empty fields
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })

        //after getting success response
        setUploadVideoResponse(result.data)
      } else {
        alert(result.message);

      }
    }
  }
  

  
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload-Videos</h5>
        <button className="btn" onClick={handleShow}><i class="fa-solid fa-arrow-up-from-bracket fa-bounce fa-2x mb-2"></i> </button>
      </div>

      {/*  Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
          controlId="floatingInputId"
          label="Video Id"
          className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Video Name">
            <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
          </FloatingLabel><br/>

          <FloatingLabel
          controlId="floatingInputImage"
          label="Image URL"
          className="mb-3"
          >
            <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideo" label="Video URL">
            {/*<Form.Control type="text" placeholder="Video URL" onChange={(e)=>setUploadVideo({...uploadVideo,link:e.target.value})} />*/}
            <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink} />
          </FloatingLabel>
          

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleAdd()}>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add