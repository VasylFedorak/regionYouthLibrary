import React from "react";
import LoremIpsum from "react-lorem-ipsum";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
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
          <a href="tel:+1234567890">+1(123) 456-7890</a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
