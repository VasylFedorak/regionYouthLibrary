import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header" id="home">
      <div className="logo">
        <img src="images/logo.jpeg" alt="Library_Logo" />
      </div>
      <nav className="nav">
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobile(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobile(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobile(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobile(false)}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className={isMobile ? "hidden" : "mobile-menu-icon"}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
