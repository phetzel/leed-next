import { useState } from "react";

import classes from "./Admin.module.css";
import Employees from "./Employees";
import Login from "./Login";
import Projects from "./Projects";

const AdminToggle = () => {
  const [tab, setTab] = useState("employee");
  const [user, setUser] = useState();

  return (
    <div className={classes.admin}>
      {user ? (
        <>
          <ul>
            <li onClick={() => setTab("employee")}>Employees</li>
            <li onClick={() => setTab("project")}>Projects</li>
            <li onClick={() => setUser()}>Logout</li>
          </ul>
          {tab === "employee" && <Employees />}
          {tab === "project" && <Projects />}
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default AdminToggle;
