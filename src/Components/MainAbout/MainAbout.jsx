import React from "react";
import "./mainabout.scss";
import img_left from "../../images/Illustration1.png";
import img_right from "../../images/Illustration2.png";
import img_user from "../../images/avatar.png";
import img_user_vector from "../../images/Vectoruser.png";
import about_vector from "../../images/qwot.png";

const MainAbout = ({ mainAbout }) => {
  return (
    <section className="main-about ">
      <div className="main-about__wrapper ">
        <h2>{mainAbout.main_page?.about_title_top}</h2>

        <div className="main-about__top container">
          <div className="about__top-left">
            <img src={img_left} alt="" />
            <p>{mainAbout.main_page?.about_text_left}</p>
          </div>
          <div className="about__top-right">
            <img src={img_right} alt="" />
            <p>{mainAbout.main_page?.about_text_right}</p>
          </div>
        </div>
        <div className="main-about__bottom">
          <img src={about_vector} alt="" className="qwot" />
          <h2>{mainAbout.main_page?.about_tetle_bottom}</h2>
          <div className="about__user">
            <img src={img_user} alt="" />
            <span>John Smith,</span>
            <img src={img_user_vector} alt="" className="user_vector" />
            <span>Social Community Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
