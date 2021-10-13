import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

const Header = ({ onScroll }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.logo} />
      <div className={classes.nav}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={displayMenu ? faTimes : faBars}
          onClick={() => setDisplayMenu(displayMenu ? false : true)}
        />
        <ul id={displayMenu ? classes.dropdownShown : classes.dropdownHidden}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li onClick={onScroll}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
