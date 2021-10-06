import classes from "./About.module.css";
const AboutDetails = () => {
  return (
    <div className={classes.aboutDetails}>
      <div>
        <h3>About Us</h3>
        <p>
          Leed Mechanical provides general industry customers a single, expert
          source for all mechanical contracting services, including design
          build, building automation systems, maintenance and 24-hour service.
          Leed Mechanical brings unparalleled resources and experience to every
          HVAC project.
        </p>
      </div>
      <div className={classes.divider} />
      <div>
        <h3>Our Core</h3>
        <p>
          Leed Mechanical provides general industry customers a single, expert
          source for all mechanical contracting services, including design
          build, building automation systems, maintenance and 24-hour service.
          Leed Mechanical brings unparalleled resources and experience to every
          HVAC project.
        </p>
      </div>
    </div>
  );
};

export default AboutDetails;
