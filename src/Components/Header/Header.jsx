import React from "react";
import "./header.scss";
import { Image } from "antd";
import { menuArray } from "../../Store/localstore";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../../StyledComponent/Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <a href="#">
            <Image src={logo} preview={false} />
          </a>
        </div>
        <div className="header__navigation">
          <Navigation array={menuArray} />
        </div>
        <div className="header__btn">
          <Button btnTransparent className="header-btn__recent">
            RECENT EPISODES
          </Button>
          <Button btnColor className="header-btn__subscribe">
            SUBSCRIBE
          </Button>
        </div>
        <div className="header__mobile-menu">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
