import React from "react";
import "./button.scss";
const Button = ({
  children,
  btnColor = false,
  btnTransparent = false,
  className = "",
}) => {
  const colorBtn = () => {
    return btnColor
      ? {
          backgroundColor: "black",
          color: "white",
          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.2)",
        }
      : btnTransparent
      ? { backgroundColor: "transparent", color: "black" }
      : undefined;
  };

  return (
    <button className={`my__btn ${className}`} style={colorBtn()}>
      {children}
    </button>
  );
};

export default Button;
