import { useState } from "react";

import classes from "./Admin.module.css";
import ProjectForm from "./ProjectForm";

const Projects = () => {
  const [project, setProject] = useState();

  return (
    <div className={classes.adminSection}>
      <ProjectForm project={project} />
    </div>
  );
};

export default Projects;
