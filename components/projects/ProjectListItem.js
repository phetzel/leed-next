import { useState } from "react";
import Image from "next/image";
import classes from "./Project.module.css";

const ProjectListItem = ({ project, setModal }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className={classes.projectIndexItem}
      onClick={() => setModal(project)}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <div className={classes.projectIndexItemImage}>
        <Image
          alt="Project Image"
          className="image"
          layout="fill"
          src={project.photoUrl}
        />
        {display && (
          <div className={classes.projectIndexItemText}>
            <div>
              <h6>Location</h6>
              <p>{project.location}</p>
            </div>
            <div>
              <h6>Services</h6>
              <p>{project.services}</p>
            </div>
            <div>
              <h6>Description</h6>
              <p>{project.description}</p>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          display
            ? classes.projectIndexItemNameHighlight
            : classes.projectIndexItemName
        }
      >
        <p>{project.name}</p>
      </div>
    </div>
  );
};

export default ProjectListItem;
