import { useEffect, useState } from "react";
import { classNames } from "react-select/dist/declarations/src/utils";

const ProjectList = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {}, []);

  return <div className={classNames.projectList}></div>;
};

export default ProjectList;
