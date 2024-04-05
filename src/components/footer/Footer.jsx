import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">FATİH CANBAY</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              Hakkımda
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Alanlar
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projelerim
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fatih-canbay-0023212a3/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/fatihcnby"
            className="home_social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; F.C. Yazılım ---  Tüm Hakları Saklıdır...
        </span>
      </div>
    </footer>
  );
};

export default Footer;
