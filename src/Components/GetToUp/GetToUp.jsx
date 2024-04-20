import React from "react";
import "./gettoup.scss";
const GetToUp = () => {
  return (
    <div
      className="getUp animate__animated  animate__rubberBand"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <div className="arrow-up"></div>
    </div>
  );
};

export default GetToUp;
