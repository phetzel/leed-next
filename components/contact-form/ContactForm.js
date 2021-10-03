import { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = ({ reference }) => {
  const [fName, setFName] = useState();
  const [lName, setLname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [callBack, setCallBack] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    console.log("hit");
    console.log(e);
  };

  return (
    <div className={classes.contactForm} ref={reference}>
      <form>
        <input value={fName} onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
};

export default ContactForm;
