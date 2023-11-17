import React from "react";
import { BsLinkedin, } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Ankit Roy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ankit-roy-791330152/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ankit144ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>


      </div>
      <div className="footer__copyright">
        <small>&copy; AJ 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
