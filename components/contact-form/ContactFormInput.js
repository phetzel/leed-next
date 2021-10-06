import classes from "./ContactForm.module.css";

const ContactFormInput = ({ error, label, type, value }) => {
  return (
    <div className={classes.ContactFormInput}>
      <p>{label}</p>
      <input value={value} />
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ContactFormInput;
