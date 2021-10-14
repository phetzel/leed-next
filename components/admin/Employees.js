import { useState } from "react";

import classes from "./Admin.module.css";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import Loading from "../loading/Loading";

const Employees = () => {
  const [employee, setEmployee] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className={classes.adminSection}>
      {loading && <Loading />}
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        setLoading={setLoading}
      />
      <EmployeeList employee={employee} setEmployee={setEmployee} />
    </div>
  );
};

export default Employees;
