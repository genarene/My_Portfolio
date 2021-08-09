import React from "react";
import { Element } from "react-scroll";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "PORTFOLIO",
    subHeading: "My Portfolio",
    text: "Here is a sneak peak of  my projects\
    throughout my journey to becoming a Web Developer",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "TODO list",
      text: "A todo list website that helps you organise \
      your daily tasks",
      link2: "https://react-todo-list-ten-tawny.vercel.app/login",
      link: "https://github.com/genarene/React-todo-list",
    },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "Online Booking",
      text: "An online class booking site\
        designed for campuses",
      link: "https://ernestine.vercel.app/",
    },
    {
      id: 3,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "My Terrarium",
      text: "A game that interacts with the user,\
        Where they plant their own flowers and plants",
      link: "https://github.com/genarene/My-Terrarium",
      link2: "https://trusting-franklin-0033a4.netlify.app/",
    },
    {
      id: 4,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "Nazarene Stories",
      text: "A blog post site that gives a glimse of my coding journey\
        from my First line in HTML to learning C# ",
      link: "https://github.com/genarene/blog-post",
      link2: "https://blog-post-rho.vercel.app/",
    },
    {
      id: 5,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "Shopping List",
      text: "Enables a user to keep track of what they intend to buy\
        and what they have already purchased",
      link: "https://github.com/genarene/Shopping-list",
      link2: "https://trusting-archimedes-80e205.netlify.app/",
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" size="2rem" />,
      heading: "Library",
      text: "Had an interesting idea of simulating\
         an online library management system",
      link: "https://github.com/genarene/Library",
    },
  ]);
  return (
    <Element name="Portfolio">
      <div className="services">
        <div className="container">
          <div className="services__header">
            <div className="common">
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div className="col-4 bgMain" key={info.id}>
                  <div className="services__box">
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                    <div className="services-icons">
                      <a
                        href={info.link}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {info.icon}
                      </a>
                      {info.link2 ? (
                        <span className="link2">
                          <a
                            href={info.link2}
                            target={"_blank"}
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            Visit site
                          </a>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
