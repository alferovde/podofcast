import React, { useEffect } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import "./episodespage.scss";
import Hero from "../../Components/Hero/Hero";
import episode_img from "../../images/episode-img.png";
import avatar from "../../images/avatar2.png";
import Button from "../../StyledComponent/Button/Button";
import LatestEpisodes from "../../Components/LatestEpisodes/LatestEpisodes";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainPage } from "../../Store/MainPageReducer/MainPageReducer";
import Download from "../../Components/Download/Download";

const EpisodesPage = () => {
  const dispatch = useDispatch();
  const dataEpisodes = useSelector((state) => state.main.mainPageData);

  useEffect(() => {
    dispatch(fetchMainPage());
  }, []);

  return (
    <PageProvider>
      <section className="episodes-page">
        <Hero>
          <div className="episodes-hero container">
            <div className="episodes-hero__left">
              <img src={episode_img} alt="" />
              <div className="tags">
                <span>Tags:</span>
                <ul>
                  <li>mind-behaviour</li>
                  <li>health</li>
                </ul>
              </div>
            </div>
            <div className="episodes-hero__right">
              <div className="episodes-hero__right-top">
                <p>Episode 1</p>
                <span>FEATURED EPISODE</span>
              </div>
              <div className="episodes-hero__right-center">
                <h3>Are you a Perplexed Mind Person?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div className="episodes-hero__right-bottom">
                <img src={avatar} alt="" />
                <p>
                  Hosted by: <span>Jane Doe</span>{" "}
                </p>

                <p>Sep 22, 2021</p>
              </div>
              <div className="episodes-hero__btn">
                <Button btnColor className="subcribe">
                  SUBSCRIBE
                </Button>
                <Button btnTransparent className="listen">
                  LISTEN NOW <span>(46 min)</span>
                </Button>
              </div>
            </div>
          </div>
        </Hero>
        <LatestEpisodes data={dataEpisodes} />
        <Download />
      </section>
    </PageProvider>
  );
};

export default EpisodesPage;
