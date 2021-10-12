import { useEffect, useState } from "react";
import classes from "./Project.module.css";
import { fetchProjects } from "../../api/project";
import Modal from "./Modal";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  const [projects, setProjects] = useState();
  const [modalImages, setModalImages] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { data } = await fetchProjects();
    setProjects(data);
  };

  return (
    <div className={classes.projectList}>
      {modalImages && <Modal images={modalImages} func={setModalImages} />}
      <h3>Past Projects</h3>
      {projects &&
        projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            setModal={setModalImages}
          />
        ))}
    </div>
  );
};

export default ProjectList;
