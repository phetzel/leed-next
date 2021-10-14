import { useState } from "react";

import classes from "./Admin.module.css";
import Loading from "../loading/Loading";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className={classes.adminSection}>
      {loading && <Loading />}
      <ProjectForm
        project={project}
        setProject={setProject}
        setLoading={setLoading}
      />
      <ProjectList project={project} setProject={setProject} />
    </div>
  );
};

export default Projects;
