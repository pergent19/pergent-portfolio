import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import social from "../objects/social.json"
import "./Footer.css";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const socialLinks = useMemo(
    () =>
      social.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3"
        >
          <i className={link.iconClass}></i>
        </a>
      )),
    []
  );

  const followSection = (
    <div className="follow">
      <h1>Follow Me</h1>
      <h5>Let us be social</h5>
    </div>
  );

  const topButton = useMemo(() => {
    return showTopBtn && (
      <button id="topBtn" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fas fa-arrow-up"></i>
      </button>
    );
  }, [showTopBtn, scrollToTop]);

  return (
    <footer className="footer text-center text-white-50 mt-5 footer-bg footerPad">
      <div className="container-fluid">
          {topButton}
          {followSection}
        <div className="sm container">
          {socialLinks}
        </div>

        <div className="copyright">
          PERGENT GALANG II<span className="copy-right-2020">&copy;2025</span>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);