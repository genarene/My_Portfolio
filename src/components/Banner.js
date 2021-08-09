import React from "react";
import { Blob } from "react-blob";
import Typed from "react-typed";
import { Element, scroller } from "react-scroll";
import {
  FaGithub,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Nazarene Gena",
    text: " A web developer  \
    who is all things Frontend",
    image: "/images/Naz-removebg-preview.png",
  });
  return (
    <Element name="Home">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <a
                        href="https://github.com/genarene"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="headerIcon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nazarene-wanyaga-426058180/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="headerIcon" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/invites/contact/?i=ionzaby3xa1l&utm_content=6oyj8px"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="headerIcon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/GenaNazarene?s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="headerIcon" />
                      </a>
                    </li>
                  </ul>
                  <h1>{state.title}</h1>
                  <p>{state.text}</p>
                  <div className="typed-container">
                    <Typed
                      className="typed-text"
                      strings={["HTML", "CSS", "JavaScript", "React JS", "C#"]}
                      typeSpeed={40}
                      backSpeed={60}
                      loop
                    />
                  </div>

                  <div className="header__buttons">
                    <a
                      href="https://drive.google.com/file/d/1csDhuXN9YrK2IUYjZNAUpMfVqzIEW7uf/view?usp=sharing"
                      target="_blank"
                      className="btn btn-outline"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="banner__img">
                <Blob
                  size="25em"
                  src={state.image}
                  alt="Nazarene"
                  style={{
                    position: "absolute",

                    height: "50rem",
                    width: "30rem",

                    opacity: 3,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default Banner;
