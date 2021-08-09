import React from "react";
import { Element } from "react-scroll";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "",
    text: "",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Languages",

      msg1: "HTML",
      msg2: "CSS",
      msg3: "JAVASCRIPT",
      msg4: "C#",
    },
    {
      id: 3,
      heading: "Libraries & Frameworks",
      msg1: "REACT JS",
      msg2: "TAILWIND CSS",
      msg3: "BOOTSTRAP CSS",
    },

    {
      id: 2,
      heading: "Version Control",

      msg1: "GIT",
      msg2: "GITHUB",
    },
  ]);
  return (
    <Element name="Skills">
      <div className="prices">
        <div className="container">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row">
            {state.map((prices) => (
              <div className="col-4" key={prices.id}>
                <div className="price">
                  <div className="priceHeading">{prices.heading}</div>
                  <ul>
                    <li>{prices.msg1}</li>
                    <li>{prices.msg2}</li>
                    {prices.msg3 ? <li>{prices.msg3}</li> : null}
                    {prices.msg4 ? <li>{prices.msg4}</li> : null}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Prices;
