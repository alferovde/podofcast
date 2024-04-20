import React from "react";
import "./hero.scss";
const Hero = ({ children }) => {
  return <div className="hero__wrapper container__out">{children}</div>;
};

export default Hero;
