import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section">
      {/* Floating Petals */}
      {[...Array(3)].map((_, i) => (
        <img
          key={i}
          src={`/assets/petals/petal-${i + 3}.png`}
          alt="petal"
          className={`about-petal about-petal-${i + 1}`}
        />
      ))}

      <div className="about-content">
        {/* LEFT TEXT */}
        <div className="about-text">
          <div className="about-heading">
            <img src="/favicon.ico" alt="favicon" />
            <span>About</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.7 }}
          >
            Welcome to Kutumba Events, where we transform your visions into
            extraordinary events! With a passion for creating memorable
            experiences, we take pride in being your go-to partner for all your
            event management needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.7 }}
          >
            At Kutumba Events, we believe that every occasion is an opportunity
            to celebrate and make lasting memories. Whether you're planning a
            corporate conference, a wedding, a milestone birthday, or any other
            special event, our dedicated team is committed to turning your
            dreams into reality.
          </motion.p>
          <a href="/about" className="about-button">
            READ FULL STORY
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <img src="/assets/about/about.png" alt="Kutumba Event Setup" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
