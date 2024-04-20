import React from "react";
import "./download.scss";
import Button from "../../StyledComponent/Button/Button";
import google from "../../images/google1.png";
import spoty from "../../images/spotify1.png";
import youtube from "../../images/youtube1.png";

const Download = () => {
  return (
    <section className="download container__out">
      <div className="download__bg-img"></div>
      <div className="download_-wrapper container">
        <div className="download__title">
          <span>BETA</span>
          <h2>Available now Pod of Cast App</h2>
          <p>We just launched our podcast app!</p>
        </div>

        <div className="download__btn">
          <Button btnColor>DOWNLOAD NOW</Button>
          <p>Content also available on:</p>
          <ul>
            <li>
              <a href="#">
                <img src={google} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={spoty} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Download;
