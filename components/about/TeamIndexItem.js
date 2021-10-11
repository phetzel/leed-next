import Image from "next/image";
import classes from "./About.module.css";

const TeamIndexItem = ({ employee }) => {
  return (
    <div className={classes.teamIndexItem}>
      <div className={classes.teamIndexItemPic}>
        <Image
          alt="Employee Image"
          className="image"
          layout="fill"
          src={employee.photoUrl}
        />
      </div>
      <div className={classes.teamIndexItemText}>
        <h2>{employee.title}</h2>
        <p>{employee.description}</p>
      </div>
    </div>
  );
};

export default TeamIndexItem;
