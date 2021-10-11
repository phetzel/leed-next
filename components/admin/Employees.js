import { useState } from "react";

import classes from "./Admin.module.css";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const Employees = () => {
  const [employee, setEmployee] = useState();

  return (
    <div className={classes.adminSection}>
      <EmployeeForm employee={employee} setEmployee={setEmployee} />
      <EmployeeList employee={employee} setEmployee={setEmployee} />
    </div>
  );
};

export default Employees;
