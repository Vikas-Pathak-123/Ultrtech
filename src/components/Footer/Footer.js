import React from "react";
import logo from "../../images/logo.png";
import footer from "../../images/Footer.gif";

import styles from "../Footer/footer.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.inner}>
          <h3>QUICK LINKS</h3>
          <hr className={styles.hr} />
          <div className={styles.flex}>
            <ul className={`${styles["footer-links"]} footer-links`}>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="how-UltraNet-works.html">How UltraNet Fibre Works</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="terms-and-conditions.html">Terms And Conditions</a>
              </li>
              <li>
                <a href="careers.html">Careers</a>
              </li>
            </ul>

            <ul className={`${styles["footer-links"]} footer-links`}>
              <li>
                <a href="ftth-network.html">FTTH Network</a>
              </li>
              <li>
                <a href="terms-of-service.html">Terms Of Service</a>
              </li>
              <li>
                <a href="partner.html">Partner</a>
              </li>
              <li>
                <a href="fair-use-policy.html">Fair Use Policy</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>

            <ul className={`${styles["footer-links"]} footer-links`}>
              <li>
                <a href="privacy-and-policy.html">Privacy And Policy</a>
              </li>
              <li>
                <a href="faqs.html">FAQs</a>
              </li>
              <li>
                <a href="sitemap.html">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.inner}>
          <h3>CONTACT US</h3>
          <hr className={styles.hr} />

          <h3>UltraNet</h3>
          <div className={styles.flex}>
            <pre>
              GROUND FLOOR, H NO-58-A,
              <br />
              KH NO 28/19, GALI NO 4,
              <br />
              RADHEY SHYAM PARK,
              <br />
              East Delhi, Delhi, 110051.
            </pre>
            <ul
              className={`${styles["footer-info"]} footer-info`}
              style={{ marginTop: "15px" }}
            >
              <li className={styles.phone}>
                <a href="tel:7065000280">+91-7065000280</a>
              </li>
              <li className={styles.phone}>
                <a href="tel:07065000960">+91-7065000960</a>
              </li>
              <li className={styles.phone} style={{ display: "none" }}>
                <a href="tel:7065000444">+91-7065000444</a>
              </li>
              <li className={styles.email}>
                <a href="/cdn-cgi/l/email-protection#2764485557095452575748555367724b535546494253094448094e49">
                  <span
                    className="__cf_email__"
                    data-cfemail="adeec2dfdd83ded8ddddc2dfd9edf8c1d9dfccc3c8d983cec283c4c3"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.inner}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaFacebookSquare />
            </div>
            <div className={styles.icon}>
              <FaTwitterSquare />
            </div>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <div className={styles.icon}>
              <FaLinkedin />
            </div>
          </div>
          <img width="280px" src={footer} alt="Ultranet" title="Ultranet" />
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className={`${styles.container} container`}>
          <div className={styles["copyright"]}>
            Copyright : {year}, <a href="index.html">UltraNet</a>. All Rights
            Reserved.
          </div>
          <div className={styles["footer_bg"]}>
            <a href="./">
              <img width="150px" src={logo} alt="Ultranet" title="Ultranet" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
