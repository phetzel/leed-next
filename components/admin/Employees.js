import { useState } from "react";

import classes from "./Admin.module.css";
import EmployeeForm from "./EmployeeForm";

const Employees = () => {
  const [employee, setEmployee] = useState();

  return (
    <div className={classes.adminSection}>
      <EmployeeForm employee={employee} />
    </div>
  );
};

export default Employees;
