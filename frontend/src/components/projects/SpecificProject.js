import * as React from "react";
import Modal from "@mui/material/Modal";
import "./specProj.css";
import { useContext } from "react";
import ProjectModal from "../../context/proj-modal-ctx.js";

const SpecificProject = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ctx = useContext(ProjectModal);
  const [projectTasks, setprojectTasks] = React.useState([]);
  let tasks = [];
  if (props.currProj_tasks) {
    tasks = props.currProj_tasks.split("\n");
    // setprojectTasks([[], ...tasks]);
    // console.log(tasks);
  }
  return (
    <div>
      {console.log(tasks)}
      <Modal
        sx={{ opacity: 1, margin: 'auto', maxWidth:'500px'}}
        open={ctx.modalOpen}
        onClose={ctx.modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ outline: "none" }} className="container">
          <div className="proj-sec">
            <div className="proj-content container">
              <header className="proj-header">
                <h5>{props.currProj_name}</h5>
                <button className="btn" onClick={ctx.modalClose}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </header>
              <p className="proj-tech-stack">
                <strong>Tech Stack: </strong>
                {props.currProj_tectstack}
              </p>
              <ul>
                {tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SpecificProject;
