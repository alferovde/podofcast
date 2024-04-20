import React from "react";
import "./aboutfounder.scss";
import FounderItem from "./FounderItem";
const AboutFounder = ({ data }) => {
  const renderFounder = () => {
    return data.about_founder?.map((item) => {
      return <FounderItem key={item.id} {...item} />;
    });
  };

  return (
    <div className="founder">
      <div className="founder__title">
        <h3>Founder and Main Host</h3>
      </div>
      <div className="founder__items">{renderFounder()}</div>
    </div>
  );
};

export default AboutFounder;
