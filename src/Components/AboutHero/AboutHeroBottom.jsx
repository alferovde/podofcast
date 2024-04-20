import React from "react";
import "./about-hero__bottom.scss";
import img_bottom from "../../images/about-img-bottom.png";
import AboutFounder from "./AboutFounder";
const AboutHeroBottom = ({ data }) => {
  return (
    <div className="about-bottom">
      <div className="about-bottom__wrapper container">
        <div className="about-bottom__title">
          <h2>What our listeners say</h2>
          <p>Their experience throughout every platform</p>
        </div>
        <div className="about-bottom__img">
          <img src={img_bottom} alt="" />
        </div>
        <div className="history">
          <h3>About and History</h3>
          <div className="history__items">
            <div className="history_item">
              <p>
                Eu non diam phasellus vestibulum lorem. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim. Id diam vel
                quam elementum pulvinar. <br /> Elementum eu facilisis sed odio
                morbi quis commodo. Sed odio morbi quis commodo odio aenean sed
                adipiscing odio diam. uno fablotoson louw uit.
              </p>
            </div>
            <div className="history_item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                pellentesque at bibendum euismod tellus duis cursus dignissim
                odio. Sit vulputate et integer in. Sit vel, senectus iaculis
                morbi. Amet interdum imperdiet laoreet morbi tincidunt
                fermentum, libero. Ante enim eget. <br /> Viverra at porttitor
                accumsan. Orci non here
              </p>
            </div>
          </div>
        </div>

        <AboutFounder data={data} />
      </div>
    </div>
  );
};

export default AboutHeroBottom;
