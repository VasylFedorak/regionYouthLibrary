import React from "react";

function Header() {
  return (
    <header className="header ">
      <div className="logo">
        <img src="#" alt="Library_Logo" />
      </div>
      <nav className="nav">
        <ul>
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
      </nav>
    </header>
  );
}

export default Header;
