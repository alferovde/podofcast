import React from "react";
import "./features.scss";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import Button from "../../StyledComponent/Button/Button";
const Features = ({ featuresData }) => {
  const renderFeaturesItems = () => {
    return featuresData.features_items?.map((item) => {
      return <FeaturesItem key={item.id} {...item} />;
    });
  };

  return (
    <section className="features">
      <div className="features__wrapper container">
        <div className="features__title-wrapper">
          <div className="features__title">
            <h2>Membership benefits</h2>
            <p>Become our sponsor and get all benefits</p>
          </div>
        </div>

        <div className="features__items">{renderFeaturesItems()}</div>

        <Button btnColor>SEE PRICING</Button>
      </div>
    </section>
  );
};

export default Features;
