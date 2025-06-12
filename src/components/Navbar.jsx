"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const toggleHamburger = () => {
    if (isMenuOpen) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsAnimatingOut(false);
      }, 600);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="kutumba-navbar">
        {/* Left Desktop Links */}
        <div className="kutumba-navbar__left">
          <a href="/" className="navbar-menu-link">
            Home
          </a>
          <a href="/about" className="navbar-menu-link">
            About
          </a>
          <div
            className="kutumba-navbar__dropdown"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="navbar-menu-link">
              Services <FaChevronDown className="kutumba-navbar__icon" />
            </span>

            <div
              className={`kutumba-navbar__submenu ${
                showServices ? "visible" : "hidden"
              }`}
            >
              <a href="/services/weddings">Weddings</a>
              <a href="/services/corporate-events">Corporate Events</a>
              <a href="/services/private-parties">Private Parties</a>
            </div>
          </div>
          <a href="/blogs" className="navbar-menu-link">
            Blogs
          </a>
        </div>

        {/* Center Logo */}
        <div className="kutumba-navbar__logo">
          <a href="/">
            <img src="/logo.svg" alt="Kutumba Events" />
          </a>
        </div>

        {/* Right Desktop Links */}
        <div className="kutumba-navbar__right">
          <a href="/who-we-are" className="navbar-menu-link">
            Who We Are
          </a>
          <a href="/gallery" className="navbar-menu-link">
            Gallery
          </a>
          <a href="/contact" className="navbar-menu-link">
            Contact
          </a>
          <CiSearch className="kutumba-navbar__search" />
        </div>

        {/* Mobile Hamburger */}
        <div className="kutumba-navbar__mobile">
          <button
            className={`navbar-hamburger-icon ${isMenuOpen ? "opened" : ""}`}
            onClick={toggleHamburger}
            aria-label="Main Menu"
            aria-expanded={isMenuOpen}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path
                className="navbar-hamburger-line navbar-hamburger-line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 
                94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 
                79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 
                L 25.000021,25.000058"
              />
              <path
                className="navbar-hamburger-line navbar-hamburger-line2"
                d="M 20,50 H 80"
              />
              <path
                className="navbar-hamburger-line navbar-hamburger-line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 
                94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 
                79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 
                L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {(isMenuOpen || isAnimatingOut) && (
        <div
          className={`kutumba-navbar__mobile-menu ${
            isAnimatingOut ? "slide-out" : "slide-in"
          }`}
        >
          <a href="/" className="navbar-mobile-menu-link">
            Home
          </a>
          <a href="/about" className="navbar-mobile-menu-link">
            About
          </a>

          <div
            className="kutumba-navbar-mobile__dropdown navbar-mobile-menu-link"
            onClick={() => setShowServices((prev) => !prev)}
          >
            <span>
              Services{" "}
              <FaChevronDown
                className={`kutumba-navbar__icon ${
                  showServices ? "visible" : ""
                }`}
              />
            </span>

            <div
              className={`kutumba-navbar__mobile-submenu ${
                showServices ? "visible" : ""
              }`}
            >
              <a href="/services/weddings">Weddings</a>
              <a href="/services/corporate-events">Corporate Events</a>
              <a href="/services/private-parties">Private Parties</a>
            </div>
          </div>

          <a href="/blogs" className="navbar-mobile-menu-link">
            Blogs
          </a>
          <a href="/who-we-are" className="navbar-mobile-menu-link">
            Who We Are
          </a>
          <a href="/gallery" className="navbar-mobile-menu-link">
            Gallery
          </a>
          <a href="/contact" className="navbar-mobile-menu-link">
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
