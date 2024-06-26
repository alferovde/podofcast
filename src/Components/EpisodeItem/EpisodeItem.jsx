import React from "react";
import "./episode-item.scss";
const EpisodeItem = ({ img, id, title, text, tags, hosted }) => {
  const global_path_server = process.env.REACT_APP_STORAGE_SERVER;

  const renderTags = () => {
    return tags.split(",").map((item) => {
      return (
        <div className="item-tag" key={item}>
          <a href="#">{item}</a>
        </div>
      );
    });
  };

  const renderHosted = () => {
    return hosted.split(",").map((item) => {
      return <img src={`http://${item.slice(0)}`} key={item} />;
    });
  };

  return (
    <div className={`episode_item ${id % 3 != 0 ? "shadow" : undefined}  `}>
      <div className="item__top">
        <img src={global_path_server + img} alt="" />
        <div className="item__top-data">
          <span>Eps. {id}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      <div className="item__bottom">
        <div className="tags"> {renderTags()}</div>

        <div className="hosted">
          <span>Hosted by: </span>
          {renderHosted()}
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
