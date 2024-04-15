import React, { useEffect } from "react";
import "./mainpage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainPage } from "../../Store/MainPageReducer/MainPageReducer";
import { Alert, Spin } from "antd";
import Testimonials from "../../Components/Testimonials/Testimonials";
import img_left from "../../images/HeroShapeSwirl.png";
import img_right from "../../images/HeroStars.png";
import MainHero from "../../Components/MainHero/MainHero";
import MainAbout from "../../Components/MainAbout/MainAbout";
import Features from "../../Components/Features/Features";
import Episodes from "../../Components/Episodes/Episodes";

const MainPage = () => {
  const mainPageData = useSelector((state) => state.main.mainPageData);
  const mainPageLoading = useSelector((state) => state.main.isLoading);
  const mainError = useSelector((state) => state.main.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainPage());
  }, []);

  const renderError = () => {
    return (
      <Alert message="Error" description={mainError} type="error" showIcon />
    );
  };

  const renderMainPage = () => {
    return (
      <>
        <MainHero mainPageData={mainPageData} />
        <MainAbout mainAbout={mainPageData} />
        <Testimonials testimonialsData={mainPageData} />
        <Features featuresData={mainPageData} />
        <Episodes episodeData={mainPageData} />
      </>
    );
  };

  return (
    <>
      <section className="main-page container__out">
        {mainPageLoading ? (
          <div className="spiner_loading">
            <Spin tip="Загрузка..." size="large">
              <div className="content" />
            </Spin>
          </div>
        ) : mainError ? (
          renderError()
        ) : (
          <>
            <div className="bg__imgs"></div>
            <div className="main-page__wrapper ">{renderMainPage()}</div>
          </>
        )}
      </section>
    </>
  );
};

export default MainPage;
