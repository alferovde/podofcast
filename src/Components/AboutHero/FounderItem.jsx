import React from "react";
import "./founderitem.scss";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const FounderItem = ({ img, sub_title, title, text, follows }) => {
  const renderFollows = () => {
    return follows.split(",").map((item) => {
      return (
        <li key={item}>
          <img src={global_path_server + item} alt="" />
        </li>
      );
    });
  };

  return (
    <div className="founder-item">
      <div className="founder-item__img">
        <img src={global_path_server + img} alt="" />
      </div>
      <div className="founder-item__content">
        <span>{sub_title}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="founder__follows">
          <span>follow me:</span>
          <ul>{renderFollows()}</ul>
        </div>
      </div>
    </div>
  );
};

export default FounderItem;
