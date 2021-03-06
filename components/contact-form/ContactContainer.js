import { useState } from "react";
import classes from "./ContactForm.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Loading from "../loading/Loading";
const ContactContainer = ({ reference }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={classes.contactContainer} ref={reference}>
      {loading && <Loading />}
      <ContactForm setLoading={setLoading} />
      <ContactInfo />
    </div>
  );
};

export default ContactContainer;
