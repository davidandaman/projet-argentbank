import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const updateFooterPosition = () => {
      const footer = document.querySelector(".footer");
      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      if (windowHeight >= bodyHeight) {
        footer.style.position = "fixed";
        footer.style.bottom = "0";
      } else {
        footer.style.position = "relative";
      }
    };

    window.addEventListener("load", updateFooterPosition);
    window.addEventListener("resize", updateFooterPosition);

    return () => {
      window.removeEventListener("load", updateFooterPosition);
      window.removeEventListener("resize", updateFooterPosition);
    };
  }, []);

  return (
    <div className="footer">
      <p>copyright 2024 Argent Bank</p>
    </div>
  );
}

export default Footer;
