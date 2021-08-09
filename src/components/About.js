import React from "react";
import { Element } from "react-scroll";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Jambo, I'm Nazarene Wanyaga, Nice to meet you",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Nazarene wanyaga" },
    { id: 2, title: "Email:", text: "genarene96@gmail.com" },
    { id: 3, title: "Phone:", text: "+254 705 434 749" },
    { id: 4, title: "Linkedin", text: "Nazarene wanyaga" },
  ]);
  return (
    <Element name="About">
      <div className="about">
        <div className="container">
          <div className="common">
            <h1 className="mainHeader">{header.subHeader}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row  h-650 alignCenter">
            <div className="col-6">
              <div className="about__img">
                <img src="/images/resizedNaz.png" alt="man" />
              </div>
            </div>
            <div className="col-6">
              <div className="about__info">
                <h1>Hi There</h1>
                <div className="about__info-p1">
                  Ever since i wrote my first {"{Hello World}"}, i have never
                  looked back, and that guys is how my Coding journey commenced,
                  the rest you can say is history...
                </div>

                <div className="about__info-p2">
                  During my journey, I have been part of the (ALC) Andela
                  Learning Comminity, Currently I am a proud Fellow of the Women
                  Techsters Fellowship Program : In the Software Development
                  Track, of which I have made great strides in my Coding journey
                  thus far.
                </div>
                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
