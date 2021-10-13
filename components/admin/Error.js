import classes from "./Admin.module.css";
const Error = ({ error }) => {
  return (
    <div className={classes.error}>
      <p>{error}</p>
    </div>
  );
};

export default Error;
