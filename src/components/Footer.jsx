import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer text-center text-white-50 mt-5 footer-bg footerPad">
      <div className="container-fluid">

        {showTopBtn && (
          <button id="topBtn" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        )}

        <div className="follow">
          <h1>Follow Me</h1>
          <h5>Let us be social</h5>
        </div>
        
        <div className="sm container">
          <a href="https://www.facebook.com/pergent.galangii" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-facebook text-danger"></i> </a>
          <a href="https://twitter.com/pergent_ii" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-twitter text-danger"></i> </a>
          <a href="https://www.instagram.com/pergent/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-instagram text-danger"></i></a>
          <a href="https://www.linkedin.com/in/pergentino-galang-ii-899758193/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-linkedin text-danger"></i></a>
          <a href="https://gitlab.com/pergent19" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-gitlab text-danger"></i></a>
        </div>

        <div className="copyright">
          PERGENT GALANG II<span className="copy-right-2020">&copy;2024</span>
        </div>

      </div>
    </footer>
  );
}
