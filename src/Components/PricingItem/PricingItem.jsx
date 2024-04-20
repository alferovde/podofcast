import React from "react";
import "./pricingitem.scss";
import Button from "../../StyledComponent/Button/Button";
const PricingItem = ({ title, text, price, includes, popular }) => {
  const renderIncludes = () => {
    return includes.split(",").map((item) => {
      return <li key={item}>{item}</li>;
    });
  };

  return (
    <div className="pricing__item">
      <div
        className={`pricing__item__top`}
        style={popular ? { border: "2px solid #cd4631" } : undefined}
      >
        <h3>{title}</h3>
        {popular ? <span className="popular">MOST POPULAR</span> : undefined}
        <p>{text}</p>
        <div className="price__btn">
          <Button btnColor>SUBSCRIBE</Button>
          <p>
            <span>${price}</span> <br /> /month
          </p>
        </div>
      </div>
      <div
        className="pricing__item__bottom"
        style={popular ? { border: "2px solid #cd4631" } : undefined}
      >
        <span>What’s included:</span>
        <ul> {renderIncludes()}</ul>
      </div>
    </div>
  );
};

export default PricingItem;
