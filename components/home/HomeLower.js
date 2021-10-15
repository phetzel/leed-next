import Link from "next/link";
import classes from "./Home.module.css";

const HomeLower = () => {
  return (
    <div className={classes.HomeLower}>
      <h1>Cost-Effective Services</h1>
      <p>
        Eliminate all the items on your to-do list by calling the experts at
        Leed Mechanical. You&apos;ll be glad you did. We have years of
        experience and work hard to make sure the job is done right while saving
        you time, money, and aggravation. We&apos;ll be there whenever you need
        us.
      </p>
      <h6>
        <Link href="/services">See what we do</Link>
      </h6>
      <h1>You&apos;ll Be Glad You Chose Us</h1>
      <p>
        Effective planning is crucial to the successful completion of any
        project. Before starting the project, our team of experts will first
        assess your goals. Then we provide you with an estimate and time-line
        for completion. From beginning to end you will be involved every step of
        the way.
      </p>
      <h6>
        <Link href="/projects">See past projects</Link>
      </h6>
    </div>
  );
};

export default HomeLower;
