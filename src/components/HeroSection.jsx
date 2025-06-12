"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/hero-section.css";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const images = [
  "/assets/hero-slides/hero-img-1.png",
  "/assets/hero-slides/hero-img-2.png",
  "/assets/hero-slides/hero-img-3.png",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="kutumba-hero">
      {/* Petals Floating */}
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={`/assets/petals/petal-${i + 1}.png`}
          alt="petal"
          className={`hero-petal hero-petal-${i + 1}`}
        />
      ))}

      {/* Left Side Content */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-left-container">
            <p className="hero-subtitle">
              <img src="/favicon.ico" alt="favicon" /> KUTUMBA EVENTS
            </p>
            <h1 className="hero-heading">
              Welcome To
              <br />
              Kutumba Events
            </h1>
            <a href="#about" className="hero-button">
              <span>Learn More</span>
            </a>
            {/* <div className="hero-slide-indicator">
              <span className={index === 0 ? "active" : ""}>01.</span> –
              <span className={index === 1 ? "active" : ""}>02.</span> –
              <span className={index === 2 ? "active" : ""}>03.</span>
            </div> */}
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="hero-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Slide"
              className="hero-slide"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-slide-indicator">
          <span className={index === 0 ? "active" : ""}> 01.</span> –
          <span className={index === 1 ? "active" : ""}> 02.</span> –
          <span className={index === 2 ? "active" : ""}> 03.</span>
        </div>
        <div className="hero-navigation">
          <div className="hero-nav hero-nav-left">
            <LiaLongArrowAltLeftSolid />
            PREV
          </div>
          <div className="hero-nav hero-nav-right">
            NEXT
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        <span></span>
      </div>
    </section>
  );
};

export default HeroSection;
