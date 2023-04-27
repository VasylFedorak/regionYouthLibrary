import React, { useState, useEffect } from "react";

function Services() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="services">
        <div className="services-title">
          <h2 style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
            Services that we provide
          </h2>
        </div>
        <ul className="grid services">
          <li>
            <img src="images/1.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/2.jpg" alt="My Image" />
          </li>
          <li>
            <img src="images/3.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/5.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/6.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/7.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/8.jpeg" alt="My Image" />
          </li>
          <li>
            <img src="images/9.jpg" alt="My Image" />
          </li>
          <li>
            <img src="images/10.jpeg" alt="My Image" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Services;
