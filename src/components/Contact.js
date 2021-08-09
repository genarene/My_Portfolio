import React from "react";
import { Element } from "react-scroll";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <Element name="Contact">
      <div className="contact">
        <div className="container">
          <div className="contactSection">
            <div className="row justifyConter">
              <div className="col-6">
                <div className="contactSection-logo">
                  <h1
                    style={{
                      color: "white",
                      fontWeight: 400,
                    }}
                  >
                    {"{Nazarene}"}
                  </h1>
                </div>

                <ul className="contactCircles">
                  <li>
                    <a
                      href="https://github.com/genarene"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="contaction" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/GenaNazarene?s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="contactIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nazarene-wanyaga-426058180/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="contaction" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/invites/contact/?i=ionzaby3xa1l&utm_content=6oyj8px"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="contactIcon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
