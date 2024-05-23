import React from "react";
import "./heroslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SliderComponent from "../SliderComponent/SliderComponent";
const HeroSlider = ({ heroSlider }) => {
  const global_path_server = process.env.REACT_APP_STORAGE_SERVER;

  const renderSlider = () => {
    return heroSlider?.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          <span> {slide.title}</span>
          <img src={global_path_server + slide.img} alt="" />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="hero__slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },

          1500: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        initialSlide={2}
      >
        {renderSlider()}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
