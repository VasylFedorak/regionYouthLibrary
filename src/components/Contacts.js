import React, { useState, useEffect } from "react";
import LoremIpsum from "react-lorem-ipsum";

function Contacts() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="contacts"
      id="contacts"
      style={{ fontSize: `calc(28px + ${offsetY / 100}px)` }}
    >
      <p>
        123 Main Street
        <br />
        Anytown, USA
        <br />
        12345
      </p>
      <div className="contact-info">
        <div>
          <a
            href="mailto:example@example.com"
            style={{ fontSize: `calc(28px + ${offsetY / 100}px)` }}
          >
            example@example.com
          </a>
        </div>
        <div>
          <a
            href="tel:+1234567890"
            className="phone"
            style={{ fontSize: `calc(28px + ${offsetY / 100}px)` }}
          >
            +1(123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
