import { useState } from "react";

import classes from "./ContactForm.module.css";
import ContactFormInput from "./ContactFormInput";

const ContactForm = ({ setLoading }) => {
  const [fName, setFName] = useState();
  const [fNameError, setFNameError] = useState();
  const [lName, setLname] = useState();
  const [lNameError, setLnameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [address, setAddress] = useState();
  const [addressError, setAddressError] = useState();
  const [city, setCity] = useState();
  const [cityError, setCityError] = useState();
  const [state, setState] = useState();
  const [stateError, setStateError] = useState();
  const [zip, setZip] = useState();
  const [zipError, setZipError] = useState();
  const [message, setMessage] = useState();

  const usStates = [
    { value: "ALABAMA", label: "AL" },
    { value: "ALASKA", label: "AK" },
    { value: "AMERICAN SAMOA", label: "AS" },
    { value: "ARIZONA", label: "AZ" },
    { value: "ARKANSAS", label: "AR" },
    { value: "CALIFORNIA", label: "CA" },
    { value: "COLORADO", label: "CO" },
    { value: "CONNECTICUT", label: "CT" },
    { value: "DELAWARE", label: "DE" },
    { value: "DISTRICT OF COLUMBIA", label: "DC" },
    { value: "FEDERATED STATES OF MICRONESIA", label: "FM" },
    { value: "FLORIDA", label: "FL" },
    { value: "GEORGIA", label: "GA" },
    { value: "GUAM", label: "GU" },
    { value: "HAWAII", label: "HI" },
    { value: "IDAHO", label: "ID" },
    { value: "ILLINOIS", label: "IL" },
    { value: "INDIANA", label: "IN" },
    { value: "IOWA", label: "IA" },
    { value: "KANSAS", label: "KS" },
    { value: "KENTUCKY", label: "KY" },
    { value: "LOUISIANA", label: "LA" },
    { value: "MAINE", label: "ME" },
    { value: "MARSHALL ISLANDS", label: "MH" },
    { value: "MARYLAND", label: "MD" },
    { value: "MASSACHUSETTS", label: "MA" },
    { value: "MICHIGAN", label: "MI" },
    { value: "MINNESOTA", label: "MN" },
    { value: "MISSISSIPPI", label: "MS" },
    { value: "MISSOURI", label: "MO" },
    { value: "MONTANA", label: "MT" },
    { value: "NEBRASKA", label: "NE" },
    { value: "NEVADA", label: "NV" },
    { value: "NEW HAMPSHIRE", label: "NH" },
    { value: "NEW JERSEY", label: "NJ" },
    { value: "NEW MEXICO", label: "NM" },
    { value: "NEW YORK", label: "NY" },
    { value: "NORTH CAROLINA", label: "NC" },
    { value: "NORTH DAKOTA", label: "ND" },
    { value: "NORTHERN MARIANA ISLANDS", label: "MP" },
    { value: "OHIO", label: "OH" },
    { value: "OKLAHOMA", label: "OK" },
    { value: "OREGON", label: "OR" },
    { value: "PALAU", label: "PW" },
    { value: "PENNSYLVANIA", label: "PA" },
    { value: "PUERTO RICO", label: "PR" },
    { value: "RHODE ISLAND", label: "RI" },
    { value: "SOUTH CAROLINA", label: "SC" },
    { value: "SOUTH DAKOTA", label: "SD" },
    { value: "TENNESSEE", label: "TN" },
    { value: "TEXAS", label: "TX" },
    { value: "UTAH", label: "UT" },
    { value: "VERMONT", label: "VT" },
    { value: "VIRGIN ISLANDS", label: "VI" },
    { value: "VIRGINIA", label: "VA" },
    { value: "WASHINGTON", label: "WA" },
    { value: "WEST VIRGINIA", label: "WV" },
    { value: "WISCONSIN", label: "WI" },
    { value: "WYOMING", label: "WY" },
  ];

  const pickerStyle = {
    option: (provides, state) => ({
      width: 100,
    }),
  };

  const handleChange = (e) => {
    console.log("hit");
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      fName,
      lName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
      message,
    };

    setLoading(true);
  };

  return (
    <div className={classes.contactForm}>
      <form>
        <div className={classes.contactFormRow}>
          <ContactFormInput
            error={fNameError}
            label={"First Name"}
            onChange={(e) => console.log(e)}
            type={"short"}
            value={fName}
          />
          <ContactFormInput
            error={lNameError}
            label={"Last Name"}
            onChange={(e) => console.log(e)}
            type={"short"}
            value={lName}
          />
        </div>
        <div className={classes.contactFormRow}>
          <ContactFormInput
            error={emailError}
            label={"Email"}
            onChange={(e) => console.log(e)}
            type={"short"}
            value={email}
          />
          <ContactFormInput
            error={phoneNumberError}
            label={"Phone Number"}
            onChange={(e) => console.log(e)}
            type={"short"}
            value={phoneNumber}
          />
        </div>
        <ContactFormInput
          error={addressError}
          label={"Address"}
          onChange={(e) => console.log(e)}
          type={"long"}
          value={address}
        />
        <div className={classes.contactFormRow}>
          <ContactFormInput
            error={cityError}
            label={"City"}
            onChange={(e) => console.log(e)}
            value={city}
          />
          <div className={classes.ContactFormInput}>
            <p>State</p>
            {/* <Select options={usStates} style={pickerStyle} /> */}
            <select>
              {usStates.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
          <ContactFormInput
            error={zipError}
            label={"Zip"}
            onChange={(e) => console.log(e)}
            value={zip}
          />
        </div>
        <div className={classes.ContactFormInput}>
          <p>Message</p>
          <textarea value={message}></textarea>
        </div>
        <div className={classes.formButton} onClick={handleSubmit}>
          <p>Contact</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
