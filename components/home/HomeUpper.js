import Image from "next/image";
import Link from "next/link";
import main from "../../public/main.png";
import classes from "./Home.module.css";

const HomeUpper = () => {
  return (
    <div className={classes.HomeUpper}>
      <div className={classes.HomeUpperLeft}>
        <div className={classes.HomeUpperDetails}>
          <h1>LEED</h1>
          <h1>MECHANICAL</h1>
          <p>
            Leed Mechanical has a proven record of excellence in designing and
            managing several building and construction projects. No matter the
            size of your project, the experienced professionals at Leed
            Mechanical will plan, design, construct, and maintain your project.
          </p>
          <p>
            Building long lasting trust based relationships with our customers
            by applying our core values &quot;Honesty, Integrity, Reliability,
            and Excellence.&quot;
          </p>
          <h6>
            <Link href="/about">Learn more about us</Link>
          </h6>
        </div>
      </div>
      <div className={classes.HomeUpperRight}>
        <Image
          alt="Project Image"
          className={classes.img}
          layout="fill"
          priority={true}
          src={main}
        />
      </div>
    </div>
  );
};

export default HomeUpper;
