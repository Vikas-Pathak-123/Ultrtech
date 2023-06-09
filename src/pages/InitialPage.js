import React, { useState, useEffect } from "react";
import image1 from "../images/Upgrade1.jpg";
import image2 from "../images/banner2001.jpg";
import image3 from "../images/banner3001.jpg";
import image4 from "../images/banner5001.jpg";
import image5 from "../images/BrodbandBenifit.jpg";
import styles from "./page.module.css";

const InitialPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4];

  // Function to change the image
  const changeImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Automatically change the image every 1 second
  useEffect(() => {
    const interval = setInterval(changeImage, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.imageChanger}>
        <img
          width="100%"
          src={images[currentImage]}
          alt={images[currentImage]}
        />
      </div>
      <div className={styles.divContainer}>
        <h1>HOW ULTRANET IS DIFFERENT</h1>
        <div className={styles.textContainer}>
          <p>
            We are voted the best broadband service provider in the India, and
            our speeds are one of the unmatched in the industry. Most fibre
            broadband services are usually fibre and copper, fibre optic cables
            from the exchange to your street and then copper wires into your
            dwelling. This negatively impacts the speed. Besides, there is more
            attenuation with copper wiring. Our mission is to ensure that our
            customers enjoy high bandwidth HD quality video streaming line.
          </p>
        </div>
        <button className={styles.btnRedGradient}>Find Out More</button>
      </div>
      <div className={styles.imageChanger}>
        <img width="100%" src={image5} alt="image5" />
      </div>
      <div className={styles.divContainer}>
        <div className={styles.textContainer}>
          <button className={styles.btnRedGradient}>
            See our Price Plans & Order now
          </button>
          <h1>WHY CHOOSE ULTRANET</h1>
          <p>
            Each type of hosting we provide is further optimized with unique
            performance tweaks!
          </p>
        </div>
      </div>
    </>
  );
};

export default InitialPage;
