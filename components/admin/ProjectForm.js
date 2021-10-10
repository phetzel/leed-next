import { useEffect, useState } from "react";
import classes from "./Admin.module.css";

const ProjectForm = ({ project }) => {
  const [name, setName] = useState();
  //   const [title, setTitle] = useState();
  //   const [description, setDescription] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (project) {
      setName(project.name);
    } else {
      setName();
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("employee[name]", name);
    // formData.append("employee[title]", title);
    // formData.append("employee[description]", description);
    formData.append("employee[image]", image);
  };

  return (
    <form className={classes.form}>
      <h2>{project ? `Edit ${project.name}` : "Add Project"}</h2>
      <label>
        Name
        <input onChange={(e) => setName(e)} value={name} />
      </label>
      {/* <label>
        Title
        <input onChange={(e) => setTitle(e)} value={title} />
      </label>
      <label>
        Description
        <textarea onChange={(e) => setDescription(e)} value={description} />
      </label> */}
      <label>
        Photo
        <input
          type="file"
          onChange={(e) => setImage(e.currentTarget.files[0])}
        />
      </label>
      <div className={classes.formButton} onClick={handleSubmit}>
        <p>{project ? "Edit" : "Add"}</p>
      </div>
    </form>
  );
};

export default ProjectForm;
