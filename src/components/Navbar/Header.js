import React from "react";
import styles from "./navbar.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className={styles.header}>
        <li>
          <Link to="/new-connection" className={styles.link}>
            New Connection
          </Link>
        </li>
        <li>
          <Link to="https://www.speedtest.net" className={styles.link}>
            Speed Test
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={styles.link}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/my-account" className={styles.link}>
            My Account
          </Link>
        </li>
        <li>
          <Link to="/quick-pay" className={styles.link}>
            Quick Pay!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
