import Image from "next/image";
import classes from "./PageImage.module.css";

const PageImage = ({ image, title }) => {
  return (
    <div className={classes.pageImage}>
      <Image
        alt="Hvac at work"
        className="image"
        layout="fill"
        objectFit="cover"
        src={image}
      />
      <div className={classes.titleContainer}>
        <div className={classes.triangle} />
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageImage;
