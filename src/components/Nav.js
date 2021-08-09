import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Element, scroller } from "react-scroll";

const Nav = () => {
  const [state, setState] = React.useState(true);
  const [active, setActive] = React.useState("Home");
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1>{"{Nazarene}"}</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li
                onClick={() => {
                  setActive("Home");
                  scroller.scrollTo("Home", { smooth: true, duration: 1500 });
                }}
                className={active == "Home" ? "active-nav" : ""}
              >
                <h2>Home</h2>
              </li>
              <li
                onClick={() => {
                  setActive("Portfolio");
                  scroller.scrollTo("Portfolio", {
                    smooth: true,
                    duration: 1500,
                  });
                }}
                className={active == "Portfolio" ? "active-nav" : ""}
              >
                <h2>Portfolio</h2>
              </li>
              <li
                onClick={() => {
                  setActive("About");
                  scroller.scrollTo("About", { smooth: true, duration: 1500 });
                }}
                className={active == "About" ? "active-nav" : ""}
              >
                <h2>About</h2>
              </li>
              <li
                onClick={() => {
                  setActive("Skills");
                  scroller.scrollTo("Skills", { smooth: true, duration: 1500 });
                }}
                className={active == "Skills" ? "active-nav" : ""}
              >
                <h2>Skills</h2>
              </li>

              <li
                onClick={() => {
                  setActive("Contact");
                  scroller.scrollTo("Contact", {
                    smooth: true,
                    duration: 1500,
                  });
                }}
                className={active == "Contact" ? "active-nav" : ""}
              >
                <h2>Contact</h2>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
