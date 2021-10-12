import classes from "./ContactForm.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
const ContactContainer = ({ reference }) => {
  return (
    <div className={classes.contactContainer}>
      <ContactForm reference={reference} />
      <ContactInfo />
    </div>
  );
};

export default ContactContainer;
