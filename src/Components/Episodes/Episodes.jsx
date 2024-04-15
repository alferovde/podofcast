import React from "react";
import "./episodes.scss";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import Button from "../../StyledComponent/Button/Button";
const Episodes = ({ episodeData }) => {
  console.log(episodeData.episode_items);
  let arr = episodeData.episode_items
    ? [...episodeData.episode_items].reverse()
    : undefined;

  console.log(arr);
  const renderEpisode = () => {
    return arr?.map((item) => {
      return <EpisodeItem {...item} />;
    });
  };

  return (
    <section className="episodes container__out">
      <div className="episodes__wrapper container">
        <div className="episodes__title">
          <h2>Recent Episodes</h2>
          <p>Available on your favorite platform</p>
        </div>
        <div className="episodes__items">{renderEpisode()}</div>

        <div className="episodes__btn">
          {" "}
          <Button btnColor>BROWSE ALL EPISODES</Button>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
