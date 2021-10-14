import { useEffect, useState, useRef } from "react";
import classes from "./Admin.module.css";
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../api/employee";

const EmployeeForm = ({ employee, setEmployee, setLoading }) => {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState("");
  const fileRef = useRef();

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setTitle(employee.title);
      setDescription(employee.description);
      fileRef.current.value = "";
    } else {
      setName("");
      setTitle("");
      setDescription("");
      fileRef.current.value = "";
    }
  }, [employee]);

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("employee[name]", name);
    formData.append("employee[title]", title);
    formData.append("employee[description]", description);
    formData.append("employee[image]", image);

    createEmployee(formData).then((res) => {
      setEmployee(res.data);
      setLoading(false);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (name != employee.name) formData.append("employee[name]", name);
    if (title != employee.title) formData.append("employee[title]", title);
    if (description != employee.description)
      formData.append("employee[description]", description);
    if (image) formData.append("employee[image]", image);

    updateEmployee(formData, employee.id).then((res) => {
      setEmployee(res.data);
      setLoading(false);
    });
  };

  const handleDelete = () => {
    deleteEmployee(employee.id).then(() => setEmployee());
  };

  return (
    <form className={classes.form}>
      <h2>{employee ? `Edit ${employee.name}` : "Add Employee"}</h2>
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
          ref={fileRef}
        />
      </label>
      {employee ? (
        <div className={classes.formButtonContainer}>
          <div className={classes.formButton} onClick={handleUpdate}>
            <p>Edit</p>
          </div>
          <div className={classes.formButton} onClick={handleDelete}>
            <p>Delete</p>
          </div>
          <div className={classes.formButton} onClick={() => setEmployee()}>
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

export default EmployeeForm;
