"use client";

import { useEffect, useState, useRef } from "react";
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
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="kutumba-hero">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={`/assets/petals/petal-${i + 1}.png`}
            alt="petal"
            className={`hero-petal hero-petal-${i + 1}`}
          />
        ))}

        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-left-container">
              <p className="hero-subtitle">
                <img src="/favicon.ico" alt="favicon" />
                <span>KUTUMBA EVENTS</span>
              </p>
              <h1 className="hero-heading">Welcome To Kutumba Events</h1>
              <a href="#about" className="hero-button">
                <span>Learn More</span>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <AnimatePresence mode="sync">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="Slide"
                className="hero-slide"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "50%" }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-slide-indicator">
            <span className={index === 0 ? "active" : ""}> 01</span> –
            <span className={index === 1 ? "active" : ""}> 02</span> –
            <span className={index === 2 ? "active" : ""}> 03</span>
          </div>
          <div className="hero-navigation">
            <div className="hero-nav hero-nav-left" onClick={goPrev}>
              <LiaLongArrowAltLeftSolid />
              PREV
            </div>
            <div className="hero-nav hero-nav-right" onClick={goNext}>
              NEXT
              <LiaLongArrowAltRightSolid />
            </div>
          </div>
          <span></span>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
