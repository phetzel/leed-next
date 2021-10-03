import Image from "next/image";
import classes from "./PageImage.module.css";

const PageImage = ({ image, title }) => {
  return (
    <div className={classes.pageImage}>
      <Image
        alt={title}
        className="image"
        layout="fill"
        objectFit="cover"
        src={image}
      />
      <div className={classes.titleContainer}>
        <div className={classes.triangle} />
        <div className={classes.title}>
          <h1>{title.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageImage;