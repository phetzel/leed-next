import Image from "next/image";
import classes from "./Project.module.css";

const Modal = ({ images, func }) => {
  const closeModal = () => func(false);

  return (
    <div className={classes.modalBackground} onClick={closeModal}>
      <div className={classes.modalChild} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalImage}>
          <Image
            alt="Project Image"
            className="image"
            layout="fill"
            objectFit="contain"
            src={images.photoUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
