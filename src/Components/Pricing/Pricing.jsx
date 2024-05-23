import React from "react";
import "./pricing.scss";
import PricingItem from "../PricingItem/PricingItem";
const Pricing = ({ pricingData }) => {
  const renderPricing = () => {
    return pricingData.pricig_items?.map((item) => {
      return <PricingItem key={item.id} {...item} />;
    });
  };

  return (
    <section className="pricing container__out">
      <div className="pricing__wrapper container">
        <div className="pricing__title">
          <h2>
            <span>B</span>ecome our sponsor
          </h2>
          <p>Get exclusive episodes, merch and more</p>
        </div>
        <div className="pricing__items">{renderPricing()}</div>
      </div>
    </section>
  );
};

export default Pricing;
