import React from "react";
import Button from "../../StyledComponent/Button/Button";
import "./abouthero.scss";
import AboutItems from "../AboutItems/AboutItems";
import Hero from "../Hero/Hero";
import AboutHeroBottom from "./AboutHeroBottom";
const AboutHero = ({ data }) => {
  return (
    <section className="about__hero">
      <Hero>
        <div className="about__title">
          <h2>
            About <br />
            <span>Pod of Cast</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam–quis.
          </p>

          <div className="about__hero-btn">
            <Button btnTransparent className="about-btn__SPONSOR">
              BECOME SPONSOR
            </Button>
            <Button btnColor className="about-btn__subscribe">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <AboutItems />
      </Hero>
      <AboutHeroBottom data={data} />
    </section>
  );
};

export default AboutHero;
