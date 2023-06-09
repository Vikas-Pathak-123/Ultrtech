import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import SlideDrawr from "./components/Navbar/SlideDrawr";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";


const App = () => {
  const [isHalfScreen, setIsHalfScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHalfScreen(window.innerWidth <= 1260);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav>
        {isHalfScreen ? (
          <SlideDrawr />
        ) : (
          <>
            <Header /> <Navbar />
          </>
        )}
      </nav>

          <Routes>
            <Route path="/" element={<InitialPage/>} />
          </Routes>

     <Footer/>
    </>
  );
};

export default App;
