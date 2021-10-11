import { useEffect, useState } from "react";

import classes from "./About.module.css";
import { fetchEmployees } from "../../api/employee";
import TeamIndexItem from "./TeamIndexItem";

const TeamIndex = () => {
  const [team, setTeam] = useState();

  useEffect(() => {
    getEmployees();
    // fetchEmployees.then((res) => console.log(res));
  }, []);

  const getEmployees = async () => {
    const { data } = await fetchEmployees();
    setTeam(data);
  };

  return (
    <div className={classes.teamIndex}>
      <h3>Meet our team</h3>
      {team &&
        team.map((employee) => (
          <TeamIndexItem key={employee.id} employee={employee} />
        ))}
    </div>
  );
};

export default TeamIndex;
