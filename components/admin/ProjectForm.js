import { useEffect, useState, useRef } from "react";
import classes from "./Admin.module.css";

import { createProject, updateProject, deleteProject } from "../../api/project";

const ProjectForm = ({ project, setProject, setLoading }) => {
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
      setServices(project.services);
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

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("project[name]", name);
    formData.append("project[location]", location);
    formData.append("project[services]", services);
    formData.append("project[description]", description);
    formData.append("project[image]", image);

    createProject(formData).then((res) => {
      setProject(res.data);
      setLoading(false);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (name != project.name) formData.append("project[name]", name);
    if (title != project.title) formData.append("project[title]", title);
    if (description != project.description)
      formData.append("project[description]", description);
    if (image) formData.append("project[image]", image);

    updateProject(formData, project.id).then((res) => {
      setProject(res.data);
      setLoading(false);
    });
  };

  const handleDelete = () => {
    deleteProject(project.id).then(() => setProject());
  };

  return (
    <form className={classes.form}>
      <h2>{project ? `Edit ${project.name}` : "Add Project"}</h2>
      <label>
        Name
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <label>
        Location
        <input onChange={(e) => setLocation(e.target.value)} value={location} />
      </label>
      <label>
        Services
        <input onChange={(e) => setServices(e.target.value)} value={services} />
      </label>
      <label>
        Description
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </label>
      <label>
        Photo
        <input
          type="file"
          onChange={(e) => setImage(e.currentTarget.files[0])}
          ref={fileRef}
        />
      </label>
      {project ? (
        <div className={classes.formButtonContainer}>
          <div className={classes.formButton} onClick={handleUpdate}>
            <p>Edit</p>
          </div>
          <div className={classes.formButton} onClick={handleDelete}>
            <p>Delete</p>
          </div>
          <div className={classes.formButton} onClick={() => setProject()}>
            <p>Cancel</p>
          </div>
        </div>
      ) : (
        <div className={classes.formButton} onClick={handleAdd}>
          <p>Add</p>
        </div>
      )}
    </form>
  );
};

export default ProjectForm;
