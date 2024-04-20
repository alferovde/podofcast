import React, { useEffect } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import "./aboutpage.scss";
import AboutHero from "../../Components/AboutHero/AboutHero";
import { useDispatch, useSelector } from "react-redux";
import { fetcAboutPage } from "../../Store/AboutPageReducer/aboutPageReducer";
import AboutSlider from "../../Components/AboutSlider/AboutSlider";
import AboutContact from "../../Components/AboutContact/AboutContact";
import Download from "../../Components/Download/Download";
const AboutPage = () => {
  const aboutData = useSelector((state) => state.about.aboutPageData);
  const aboutPageLoading = useSelector((state) => state.about.isLoading);
  const aboutError = useSelector((state) => state.about.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetcAboutPage());
  }, []);

  return (
    <PageProvider error={aboutError} loading={aboutPageLoading}>
      <section className="about container__out">
        <AboutHero data={aboutData} />
        <AboutSlider data={aboutData} />
        <AboutContact />
        <Download />
      </section>
    </PageProvider>
  );
};

export default AboutPage;
