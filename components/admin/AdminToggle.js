import { useState } from "react";

import classes from "./Admin.module.css";
import Employees from "./Employees";
import Projects from "./Projects";

const AdminToggle = () => {
  const [tab, setTab] = useState("employee");

  return (
    <div className={classes.admin}>
      <ul>
        <li onClick={() => setTab("employee")}>Employees</li>
        <li onClick={() => setTab("project")}>Projects</li>
      </ul>
      {tab === "employee" && <Employees />}
      {tab === "project" && <Projects />}
    </div>
  );
};

export default AdminToggle;
