import { useState } from "react";

import classes from "./Admin.module.css";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [project, setProject] = useState();

  return (
    <div className={classes.adminSection}>
      <ProjectForm project={project} setProject={setProject} />
      <ProjectList project={project} setProject={setProject} />
    </div>
  );
};

export default Projects;
