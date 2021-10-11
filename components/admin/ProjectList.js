import { useEffect, useState } from "react";
import classes from "./Admin.module.css";
import { fetchProjects } from "../../api/project";
import ListItem from "./ListItem";

const ProjectList = ({ project, setProject }) => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    getProjects();
  }, [project]);

  const getProjects = async () => {
    const { data } = await fetchProjects();
    setProjects(data);
  };

  return (
    <div className={classes.list}>
      <h2>Current Projects</h2>
      <div className={classes.listDivider} />
      {projects &&
        projects.map((ele) => (
          <ListItem key={ele.id} item={ele} set={setProject} />
        ))}
      <div className={classes.listDivider} />
    </div>
  );
};

export default ProjectList;
