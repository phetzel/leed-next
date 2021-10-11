import { useEffect, useState } from "react";
import classes from "./Admin.module.css";

import { createService, updateService, deleteService } from "../../api/service";

const ProjectForm = ({ project }) => {
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [services, setServices] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const fileRef = useRef();

  useEffect(() => {
    if (project) {
      setName(project.name);
      setLocation(project.location);
      setServices(project.setServices);
      setDescription(project.description);
      fileRef.current.value = "";
    } else {
      setName("");
      setLocation("");
      setServices("");
      setDescription("");
      fileRef.current.value = "";
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("project[name]", name);
    formData.append("project[location]", location);
    formData.append("project[services]", services);
    formData.append("project[description]", description);
    formData.append("project[image]", image);
  };

  return (
    <form className={classes.form}>
      <h2>{project ? `Edit ${project.name}` : "Add Project"}</h2>
      <label>
        Name
        <input onChange={(e) => setName(e)} value={name} />
      </label>
      <label>
        Location
        <input onChange={(e) => setLocation(e)} value={location} />
      </label>
      <label>
        Services
        <input onChange={(e) => setServices(e)} value={services} />
      </label>
      <label>
        Description
        <textarea onChange={(e) => setDescription(e)} value={description} />
      </label>
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
