import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";
const Navigation = ({ array }) => {
  const renderMenu = () => {
    return array.map((item) => {
      return (
        <NavLink key={item.id} to={item.href}>
          {item.link}
        </NavLink>
      );
    });
  };

  return <nav className="navigation__main">{renderMenu()}</nav>;
};

export default Navigation;
