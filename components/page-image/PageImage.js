import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./PageImage.module.css";

const PageImage = ({ image, title }) => {
  return (
    <div className={classes.pageImage}>
      <div className={classes.fixed}>
        <div className={classes.imageContainer}>
          <Image
            alt={title}
            className="image"
            layout="fill"
            objectFit="cover"
            priority={true}
            src={image}
          />
        </div>
      </div>
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
