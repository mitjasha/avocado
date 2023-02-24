import React from "react";
import { useTranslation } from "react-i18next";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import minus from "../../assets/svg/minus-light.svg";
import plus from "../../assets/svg/plus-light.svg";
import DailyEventEditWrapper from "../../components/DailyEventEditWrapper/DailyEventEditWrapper";
import DailyEventEditData from "../../components/DailyEventEditData/DailyEventEditData";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "../MainScreen/MainScreen.scss";
import "../../index.scss";

const EditEventScreen = () => {
  const { t } = useTranslation();
  const getWaterConsumed = () => {
    const content = [];
    const litreConsumed = 0.75; // будем получать эти данные из бд
    const oneGlass = 0.25;
    const glasses = litreConsumed / oneGlass;
    for (let i = 0; i < glasses; i += 1) {
      content.push(<div className="glass" key={i} />);
    }
    return (
      <div className="glasses__container">
        <div className="glasses">{content}</div>
        <div className="glasses__control-btn">
          <PlusMinusButton>
            <img src={minus} alt="minus" className="plus-minus-img" />
          </PlusMinusButton>
          <PlusMinusButton>
            <img src={plus} alt="plus" className="plus-plus-img" />
          </PlusMinusButton>
        </div>
      </div>
    );
  };

  const breakfast = [
    ["orange", "150", "64,5"],
    ["porrige", "275", "234"],
    ["coffee", "160", "30"],
  ]; // будем получать эти данные из бд
  const lunch = [
    ["soup", "350", "264,7"],
    ["tea", "150", "4,5"],
  ]; // будем получать эти данные из бд
  const dinner = [
    ["fish", "250", "320"],
    ["potato", "150", "185"],
  ]; // будем получать эти данные из бд
  const snaks = [
    ["apple", "134", "65"],
    ["nuts", "83", "340"],
  ]; // будем получать эти данные из бд
  const activities = [
    ["running", "30", "265"],
    ["swimming", "60", "440"],
  ]; // будем получать эти данные из бд

  return (
    <div className="edit-event__screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h1 className="daily-events__title">{t("main_daily_meals")}</h1>
            <DailyEventEditWrapper
              title={t("main_breakfast")}
              recommended={`${t("main_recommended")} 447 ${t("main_kcal")}`}
              quantity={`356 ${t("main_kcal")}`}
              content={<DailyEventEditData type="meal" data={breakfast} />}
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventEditWrapper
              title={t("main_lunch")}
              recommended={`${t("main_recommended")} 447 ${t("main_kcal")}`}
              className="daily-events__item daily-events__item_lunch"
              content={<DailyEventEditData type="meal" data={lunch} />}
            />
            <DailyEventEditWrapper
              title={t("main_dinner")}
              recommended={`${t("main_recommended")} 447 ${t("main_kcal")}`}
              className="daily-events__item daily-events__item_dinner"
              content={<DailyEventEditData type="meal" data={dinner} />}
            />
            <DailyEventEditWrapper
              title={t("main_snack")}
              recommended={`${t("main_recommended")} 447 ${t("main_kcal")}`}
              className="daily-events__item daily-events__item_snack"
              content={<DailyEventEditData type="meal" data={snaks} />}
            />
          </div>
          <div className="daily-events__water">
            <h3 className="daily-events__title">{t("main_water_consumed")}</h3>
            <DailyEventEditWrapper
              title={t("main_water")}
              quantity={`0.75${t("main_liter")} (40%)`}
              recommended={`${t("main_recommended")} 2${t("main_liter")} (8 ${t(
                "main_glasses",
              )})`}
              className="daily-events__item daily-events__item_water"
              content={getWaterConsumed()}
            />
          </div>
          <div className="daily-events__exercise">
            <h3 className="daily-events__title">{t("main_daily_exercise")}</h3>
            <DailyEventEditWrapper
              title={t("main_activity")}
              recommended={`${t("main_last_activity")}: Run 1 km`}
              className="daily-events__item daily-events__item_exercise"
              content={<DailyEventEditData type="activity" data={activities} />}
            />
          </div>
        </div>
      </div>
      <ButtonTemplate className="event__changes__btn">
        {t("edit_profile_save")}
      </ButtonTemplate>
    </div>
  );
};

export default EditEventScreen;
