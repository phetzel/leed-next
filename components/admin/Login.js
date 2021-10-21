import { useState } from "react";
import classes from "./Admin.module.css";
import { login } from "../../api/user";
import Error from "./Error";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[name]", name);
    formData.append("user[password]", password);

    login(formData).then((res) => {
      if (res.status === 200) {
        setError();
        setUser(res.data);
      } else {
        setError(res.data[0]);
      }
    });
  };

  return (
    <form className={classes.login}>
      <h2>Login</h2>
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
          setUser
        />
      </label>
      <div className={classes.formButton} onClick={handleSubmit}>
        <p>Login</p>
      </div>
      {error && <Error error={error} />}
    </form>
  );
};

export default Login;
