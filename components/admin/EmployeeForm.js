import { useState } from "react";
import classes from "./Admin.module.css";
import { createEmployee, updateEmployee } from "../../api/employee";

const EmployeeForm = () => {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("employee[name]", name);
    formData.append("employee[title]", title);
    formData.append("employee[description]", description);
    formData.append("employee[image]", image);

    createEmployee(formData);
  };

  return (
    <form className={classes.form}>
      <h2>Add Employee</h2>
      <label>
        Name
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <label>
        Title
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
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
        />
      </label>
      <div className={classes.formButton} onClick={handleSubmit}>
        <p>Add</p>
      </div>
    </form>
  );
};

export default EmployeeForm;
