import classes from "./ContactForm.module.css";
const ContactInfo = () => {
  return (
    <div className={classes.contactInfo}>
      <h1>Contact Us</h1>
      <div className={classes.contactDetails}>
        <h3>Leed Mechanical</h3>
        <p>Phone: (916) 851-8617</p>
        <p>11292 Sunrise Park Drive</p>
        <p>Rancho Cordova, CA 95742</p>
      </div>
    </div>
  );
};

export default ContactInfo;
