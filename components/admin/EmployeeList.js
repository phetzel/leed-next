import { useEffect, useState } from "react";
import classes from "./Admin.module.css";
import { fetchEmployees } from "../../api/employee";
import ListItem from "./ListItem";

const EmployeeList = ({ employee, setEmployee }) => {
  const [employees, setEmployees] = useState();
  useEffect(() => {
    getEmployees();
  }, [employee]);

  const getEmployees = async () => {
    const { data } = await fetchEmployees();
    setEmployees(data);
  };

  return (
    <div className={classes.list}>
      <h2>Current Employees</h2>
      <div className={classes.listDivider} />
      {employees &&
        employees.map((ele) => (
          <ListItem key={ele.id} item={ele} set={setEmployee} />
        ))}
      <div className={classes.listDivider} />
    </div>
  );
};

export default EmployeeList;
