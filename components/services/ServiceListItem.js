import classes from "./Service.module.css";

const ServiceListItem = ({ description, title }) => {
  return (
    <li className={classes.serviceListItem}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default ServiceListItem;
