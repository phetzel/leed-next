import { useState } from "react";
import Image from "next/image";
import classes from "./Project.module.css";

const ProjectListItem = ({ project, setModal }) => {
  const [display, setDisplay] = useState(false);
  console.log(display);
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
            <h6>Location</h6>
            <p>{project.location}</p>
            <h6>Services</h6>
            <p>{project.services}</p>
            <h6>Description</h6>
            <p>{project.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectListItem;
