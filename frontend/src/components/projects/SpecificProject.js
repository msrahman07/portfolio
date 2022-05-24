import * as React from 'react';
import Modal from '@mui/material/Modal';
import "./specProj.css";

export default function SpecificProject(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container">
          <div className="proj-sec">Hello My friend</div>
        </div>
      </Modal>
    </div>
  );
}