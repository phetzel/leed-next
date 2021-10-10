import { useState } from "react";
import classes from "./Admin.module.css";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[name]", name);
    formData.append("user[password]", password);

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
        Password
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </label>
      <div className={classes.formButton} onClick={handleSubmit}>
        <p>Login</p>
      </div>
    </form>
  );
};

export default Login;
