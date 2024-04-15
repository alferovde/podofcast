import React from "react";
import "./featureitem.scss";
const FeaturesItem = ({ title, text, img }) => {
  const global_path_server = "http://127.0.0.1:8000/storage/";
  return (
    <div className="feature__item">
      <img src={global_path_server + img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesItem;
