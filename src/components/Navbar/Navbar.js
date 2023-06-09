import React from "react";
import styles from "./navbar.module.css";
import logo from "../../images/logo.png";
import icon1 from "../../images/broadband-only.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img width="160px" src={logo} alt="UltraNet" />
      </div>
      <div className={styles.navtabs}>
        <span
          className={styles.navlink}
          style={{ borderRadius: "30px 0 0px 30px" }}
          data-tooltip="Offers"
        >
          <a href="/">
            <span>Offers</span>
          </a>
          <div className={styles.tooltip}>
            <div className={styles.triangleUp}></div>
            <a href="/offers-link1" className={styles.flex}>
              <img src={icon1} alt="Icon 1" />
              &emsp;&emsp; Delhi
            </a>
            |
            <a href="/offers-link2" className={styles.flex}>
              <img src={icon1} alt="Icon 2" />
              &emsp; &emsp;Rest of India
            </a>
          </div>
        </span>
        <span className={styles.navlink} data-tooltip="Home">
          <a href="/">
            <span>Home</span>
          </a>
          <div className={styles.tooltip}>
            <div className={styles.triangleUp}></div>

            <a href="/home-link1">
              <img src="/icon1.png" alt="Icon 1" />
            </a>
            <a href="/home-link2">
              <img src="/icon2.png" alt="Icon 2" />
            </a>
          </div>
        </span>
        <span className={styles.navlink} data-tooltip="Business">
          <a href="/business">
            <span>Business</span>
          </a>
          <div className={styles.tooltip}>
            <div className={styles.triangleUp}></div>

            <a href="/business-link1">
              <img src="/icon1.png" alt="Icon 1" />
            </a>
            <a href="/business-link2">
              <img src="/icon2.png" alt="Icon 2" />
            </a>
          </div>
        </span>
        <span className={styles.navlink} data-tooltip="FAQ's">
          <a href="/faqs">
            <span>FAQ's</span>
          </a>
          <div className={styles.tooltip}>
            <div className={styles.triangleUp}></div>

            <a href="/faq-link1">
              <img src="/icon1.png" alt="Icon 1" />
            </a>
            <a href="/faq-link2">
              <img src="/icon2.png" alt="Icon 2" />
            </a>
          </div>
        </span>
        <span
          className={styles.navlink}
          style={{ borderRadius: "0 30px 30px 0" }}
          data-tooltip="How UltraNet Works"
        >
          <a href="/how-ultranet-works">
            <span>How UltraNet Works</span>
          </a>
          <div className={styles.tooltip}>
            <div className={styles.triangleUp}></div>

            <a href="/works-link1">
              <img src="/icon1.png" alt="Icon 1" />
            </a>
            <a href="/works-link2">
              <img src="/icon2.png" alt="Icon 2" />
            </a>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
