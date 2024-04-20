import React from "react";
import { about_items } from "../../Store/localstore";
import "./aoutitems.scss";
const AboutItems = () => {
  const renderItems = () => {
    return about_items.map((item) => {
      return (
        <div className="about__item" key={item.id}>
          <h3>
            {item.title} <span>K</span>{" "}
          </h3>
          <p>{item.text}</p>
        </div>
      );
    });
  };

  return <div className="about__items">{renderItems()}</div>;
};

export default AboutItems;
