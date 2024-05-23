import React from "react";
import "./aboutslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const AboutSlider = ({ data }) => {
  console.log("-->", data.about_slider);

  const renderSlider = () => {
    return data.about_slider?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <img src={global_path_server + item.img} alt="" />
          <p>{item.text}</p>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="about-slider">
      <div className="about-slider__title">
        <h2>Our Sponsor</h2>
        <p>Our current official sponsor</p>
      </div>
      <div className="about-slider__container container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper-about"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {renderSlider()}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutSlider;
