import React from "react";
import "./herosupport.scss";
import spotify from "../../images/Spotify.png";
import google from "../../images/GooglePodcast.png";
import youtube from "../../images/Youtube.png";

const HeroSupport = () => {
  return (
    <div className="hero__support container">
      <span>Supported by:</span>
      <ul className="hero__support-item">
        <li>
          <img src={spotify} alt="" />
        </li>
        <li>
          <img src={google} alt="" />
        </li>
        <li>
          <img src={youtube} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default HeroSupport;
