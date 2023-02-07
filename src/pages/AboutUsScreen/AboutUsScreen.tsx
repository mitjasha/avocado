import React from "react";
import "./AboutUsScreen.scss";
import "../../index.scss";

const AboutUsScreen = () => {
  return (
    <div className="about__us__screen container">
      <h1 className="about__us__title">About us</h1>
      <div className="about__us__logo" />
      <h3 className="about__us__top_h3">WHO WE ARE?</h3>
      <div className="about__us__container">
        <span className="about__us__text">
          Our team is a big friendly family, which is pleased to present our
          project that improves people’s lives. We know how difficult it is to
          change your lifestyle. That’s why it was important for us to create
          such an application, opening which you would like to come back again.
        </span>
        <h3 className="about__us__text__h3">
          WHAT WILL YOU GET USING OUR APP?
        </h3>
        <ul className="about__us__ul">
          <li className="about__us__text">Control of calories consumed</li>
          <li className="about__us__text">
            Control of consumed proteins, fats and carbs
          </li>
          <li className="about__us__text">Recipes for proper nutrition</li>
          <li className="about__us__text">Control of the water consumed</li>
          <li className="about__us__text">Monitoring activity for the day</li>
        </ul>
        <span className="about__us__text">
          Start today! Taking care of yourself is easier than it seems. We wish
          you success in achieving your goal on the path of a healthy lifestyle!
        </span>
        <div className="about__us__heart" />
      </div>
    </div>
  );
};

export default AboutUsScreen;
