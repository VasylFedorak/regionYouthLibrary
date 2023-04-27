import React, { useState, useEffect } from "react";
import "../style.css";

function Contacts(props) {
  const [fontSize, setFontSize] = useState("var(--font-size)");

  const handleScroll = () => {
    const offsetY = window.pageYOffset;
    const newFontSize = `calc(${fontSize} + ${offsetY / 100}px)`;
    setFontSize(newFontSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="contacts" id="contacts" style={{ fontSize }}>
      <p>
        123 Main Street
        <br />
        Anytown, USA
        <br />
        12345
      </p>
      <div className="contact-info">
        <div>
          <a href="mailto:example@example.com">example@example.com</a>
        </div>
        <div>
          <a href="tel:+1234567890" className="phone">
            +1(123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
