import React, { useEffect } from "react";
import "./latesepisodes.scss";
import EpisodeItem from "../EpisodeItem/EpisodeItem";

const LatestEpisodes = (data) => {
  console.log(data.data.episode_items);
  let arr = data.data.episode_items
    ? [...data.data.episode_items].reverse()
    : undefined;

  const renderEpisode = () => {
    return arr?.map((item) => {
      return <EpisodeItem key={item.id} {...item} />;
    });
  };
  return (
    <div className="lates-episodes">
      <div className="episodes__container container">
        <div className="lates-episodes__top">
          <h2>Latest Episode</h2>
          <div className="episodes__menu">
            <ul>
              <li>All</li>
              <li>Business</li>
              <li>Comedy</li>
              <li>Education</li>
              <li>Health</li>
              <li>News</li>
              <li>Tech</li>
            </ul>
          </div>
        </div>
        <div className="lates-episodes__bottom">{renderEpisode()}</div>
      </div>
    </div>
  );
};

export default LatestEpisodes;
