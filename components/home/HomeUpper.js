import classes from "./Home.module.css";

const HomeUpper = () => {
  return (
    <div className={classes.HomeUpper}>
      <div className={classes.HomeUpperLeft}>
        <div className={classes.HomeUpperDetails}>
          <h1>LEED</h1>
          <h1>MECHANICAL</h1>
          <p>
            Building long lasting trust based relationships with our customers
            by applying our core values &quot;Honesty, Integrity, Reliability,
            and Excellence.&quot;
          </p>
        </div>
      </div>
      <div className={classes.HomeUpperRight}></div>
    </div>
  );
};

export default HomeUpper;
