import React, { useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header ">
      <div className="logo">
        <img src="#" alt="Library_Logo" />
      </div>
      <nav className="nav">
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Serviсes</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
