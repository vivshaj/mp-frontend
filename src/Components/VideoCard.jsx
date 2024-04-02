import React, { useState } from 'react'
import { Button,Card, Modal} from 'react-bootstrap'
import {addVideoHistoryAPI, deleteVideoAPI} from '../../services/allAPI';


function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,link}=video;

    const date = new Date();
    console.log(date); 
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(date);
    console.log(timeStamp);

    let videoHistory = {caption,link,timeStamp}
    console.log(videoHistory)

    //make api call
    await addVideoHistoryAPI(videoHistory)
  };

  const removeVideo = async (id)=> {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e,id)=> {
    console.log("Drag started...Video Id: "+id);
    e.dataTransfer.setData("VideoId",id)
    {/*We are transferring data here*/}
  }

  return (
    <>
      {/*<Card style={{ width: '18rem' }} className='mb-3 me-5'>*/}
      {/*As you know card contains what we want to drag to category which we created 
      .So we make it draggable */}
      <Card style={{ width: '100%' }} className='mb-3' draggable onDragStart={e=>dragStarted(e,video?.id)}> 
        <Card.Img height={'200px'}  onClick={handleShow} variant="top"  src={video?.url}/>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{video?.caption}</h5>
            {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>}
            </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Instead of clicking on 'Share' and then getting embed code...directly 'right click' on video then 'Copy embed code' */}
          {/* for 'autoplay' in 'iframe' for 'src' after url give '?autoplay=1' like below  */}
          <iframe width="100%" height="360" src={`${video?.link}?autoplay=1`} title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard