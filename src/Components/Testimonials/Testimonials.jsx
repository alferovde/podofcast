import React from "react";
import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import qwot from "../../images/qwot.png";
import { Navigation } from "swiper/modules";
const Testimonials = ({ testimonialsData }) => {
  const global_path_server = "http://127.0.0.1:8000/storage/";

  const renderSlider = () => {
    return testimonialsData.testi_slider?.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          <img src={qwot} alt="" className="qwot" />
          <p> {slide.title}</p>
          <div className="slide__user">
            <img src={global_path_server + slide.img_user} alt="" />
            <p>{slide.user_name}</p>
            <img
              src={global_path_server + slide.logo}
              alt=""
              className="logo"
            />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <section className="testimonials ">
      <div className="testimonials__wrapper container">
        <div className="testimonials__title">
          <h2>{testimonialsData.main_page?.testimonials_title}</h2>
          <p>{testimonialsData.main_page?.testimonials_text}</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   slideClass="swiper-slide-testi"
          modules={[Navigation]}
          navigation={true}
          className="mySwiper-testi"
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
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },

            1500: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          initialSlide={1}
        >
          {renderSlider()}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
