import { useEffect, useState } from "react";
import classes from "./Project.module.css";
import { fetchProjects } from "../../api/project";
import Modal from "./Modal";
import Loading from "../loading/Loading";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  const [projects, setProjects] = useState();
  const [modalImages, setModalImages] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  const getProjects = async () => {
    const { data } = await fetchProjects();

    setProjects(data);
  };

  if (!projects)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          position: "relative",
          width: "100%",
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div className={classes.projectListContainer}>
      <div className={classes.projectList}>
        {modalImages && <Modal images={modalImages} func={setModalImages} />}
        <h3>Past Projects</h3>
        <ul>
          {projects &&
            projects.map((project) => (
              <ProjectListItem
                key={project.id}
                project={project}
                setModal={setModalImages}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
