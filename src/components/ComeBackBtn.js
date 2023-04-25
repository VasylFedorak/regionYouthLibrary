import React from "react";
import { useState, useEffect } from "react";

function ComeBackBtn() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowBackToTopBtn(true);
      } else {
        setShowBackToTopBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        id="back-to-top-btn"
        className={showBackToTopBtn ? "show" : ""}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}

export default ComeBackBtn;
