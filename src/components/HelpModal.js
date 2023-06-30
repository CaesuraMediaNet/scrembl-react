import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Modal from 'react-bootstrap/Modal';

export default function HelpModal() {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
      <Button variant="primary" onClick={handleShow}>
         <HelpOutlineIcon /> Help
      </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Scrembl HowTo</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div className="mb-3">
               Suppose you have a secret message to send to your Social Media group that you think the Social
               Media platfom might not like. Or it had hidden or deleted or blocked it.
            </div>
            <div className="mb-3">
               Type your message into the top box, press Scrembl, copy to clipboard then paste the
               message into the Social Media as a post.
            </div>
            <div className="mb-3">
               All members of your group can then copy it from the Social Media platfom into the middle box, and press 
               UnScrembl - they will see your original message.
            </div>
            <div className="mb-3">
               <b>Note that no messages are sent to any server, or saved in any database!</b>
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
               Got It!
            </Button>
         </Modal.Footer>
      </Modal>
      </>
  );
}

