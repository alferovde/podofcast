import React from "react";
import Button from "../../StyledComponent/Button/Button";
import HeroSlider from "../HeroSlider/HeroSlider";
import "./mainhero.scss";
import HeroSupport from "../HeroSupport/HeroSupport";

const MainHero = ({ mainPageData }) => {
  const heloTitleStart = mainPageData.main_page?.hero_title.slice(0, 10);
  const heloTitleEnd = mainPageData.main_page?.hero_title.slice(10);

  return (
    <section className="mainpage__hero">
      <h1>
        {heloTitleStart} <span>{heloTitleEnd}</span>
      </h1>
      <p>{mainPageData.main_page?.hero_description}</p>
      <Button btnColor>SUBSCRIBE</Button>
      <HeroSlider heroSlider={mainPageData.hero_slider} />
      <HeroSupport />
    </section>
  );
};

export default MainHero;
