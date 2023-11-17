import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import Resume from "../Assets/images/resume.pdf"

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Ankit Roy</h1>
        <h5 className="text-light">Full-Stack-Developer</h5>
        <div className="cta">
          <a href={Resume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/ankit-roy-791330152/"
            target="_blank"
            rel=" noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/ankit144ar"
            target="_blank"
            rel=" noreferrer"
          >
            <FaGithub />
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
