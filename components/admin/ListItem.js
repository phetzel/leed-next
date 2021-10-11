import Image from "next/image";
import classes from "./Admin.module.css";

const ListItem = ({ item, set }) => {
  return (
    <div className={classes.listItem} onClick={() => set(item)}>
      <div className={classes.listItemPic}>
        <Image
          alt={item.name}
          className="image"
          layout="fill"
          src={item.photoUrl}
        />
      </div>
      <h6>{item.name}</h6>
    </div>
  );
};

export default ListItem;
