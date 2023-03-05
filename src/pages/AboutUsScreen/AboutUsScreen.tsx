import React from "react";
import "./AboutUsScreen.scss";
import "../../index.scss";

import { useTranslation } from "react-i18next";

const AboutUsScreen = () => {
  const { t } = useTranslation();
  return (
    <div className="about__us__screen">
      <div className="container">
        <h1 className="about__us__title">{t("about_us_title")}</h1>
        <div className="about__us__logo-wrapper">
          <div className="about__us__logo" />
          <h3 className="about__us__top_h3">{t("about_us_header")}</h3>
        </div>
        <div className="about__us__container">
          <span className="about__us__text">{t("about_us_text")}</span>
          <h3 className="about__us__text__h3">{t("about_us_question")}</h3>
          <ul className="about__us__ul">
            <li className="about__us__text">{t("about_us_li_1")}</li>
            <li className="about__us__text">{t("about_us_li_2")}</li>
            <li className="about__us__text">{t("about_us_li_3")}</li>
            <li className="about__us__text">{t("about_us_li_4")}</li>
            <li className="about__us__text">{t("about_us_li_5")}</li>
          </ul>
          <span className="about__us__text">{t("about_us_end_text")}</span>
          <div className="about__us__heart" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
