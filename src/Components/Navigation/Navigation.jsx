import React from "react";
import { NavLink } from "react-router-dom";
import { menuArray } from "../../Store/localstore";

import "./navigation.scss";
const Navigation = () => {
  const renderMenu = () => {
    return menuArray.map((item) => {
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
