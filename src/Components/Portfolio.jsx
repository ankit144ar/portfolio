import IMG1 from "../Assets/images/fio-img.png";
import IMG2 from "../Assets/images/dashboad-img.png";
import IMG3 from "../Assets/images/humbl-img.png";
import IMG4 from "../Assets/images/habit-img.png";
import IMG5 from "../Assets/images/sharemate-img.png";
import IMG6 from "../Assets/images/three-img.png";

import React from "react";
import "./Portfolio.css";

const portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Fiore",
      img: IMG1,
      description:
        "Fiore is an Ecommerce app that offers various kinds of flowers that can be sold online. It has features like cart management, wishlist management, filter and primary feature that are required in an e-commerce app.",
      technologies: "Html | CSS | Javascript | React Js ",
      link: "https://fio-tan.vercel.app/",
      github: "https://github.com/ankit144ar/fio",
    },
    {
      id: 2,
      title: "Dashboad",
      img: IMG2,
      description: "Front View of a Dashboad created through React.",
      technologies: "React | Redux | Rechart",
      link: "https://dashboad-reac.vercel.app/",
      github: "https://github.com/ankit144ar/dashboad",
    },
    {
      id: 3,
      title: "Humbl",
      img: IMG3,
      description: "E-commerce BackEnd project - online shirt shop ",
      technologies: "React | Redux",
      link: "https://humbl.vercel.app/",
      github: "https://github.com/ankit144ar/humbl",
    },
    {
      id: 4,
      title: "Habit Tracker",
      img: IMG4,
      description: "An app to track your day to day habit.",
      technologies: "HTML | CSS | JavaScript | ReactJS | Redux",
      link: "https://habit-tracker-jet.vercel.app/",
      github: "https://github.com/ankit144ar/habit-tracker",
    },
    {
      id: 5,
      title: "ShareMate Social Media app",
      img: IMG5,
      description: "A Social media app frontend created through react. ",
      technologies:
        "Javascript | CSS | React-Router | React Js | JWT-Authentication | useReducer | Social-Media-app",
      link: "https://sharemate-aef3.vercel.app/",
      github: "https://github.com/ankit144ar/sharemate",
    },
    {
      id: 6,
      title: "Music Store",
      img: IMG6,
      description: "A Three.js interactive website ",
      technologies: "HTML | CSS | JavaScript | Three Js ",
      link: "https://bigdaddykane.com/staging/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github && (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default portfolio;
