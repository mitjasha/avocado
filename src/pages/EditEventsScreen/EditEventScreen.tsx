import React from "react";
import "../../index.scss";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import minus from "../../assets/svg/minus-light.svg";
import "../MainScreen/MainScreen.scss";
import DailyEventEditWrapper from "../../components/DailyEventEditWrapper/DailyEventEditWrapper";
import DailyEventEditData from "../../components/DailyEventEditData/DailyEventEditData";

const EditEventScreen = () => {
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
        <PlusMinusButton>
          <img src={minus} alt="minus" className="plus-minus-img" />
        </PlusMinusButton>
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
    <div className="container">
      <div className="daily-events">
        <div className="daily-events__meals">
          <h1 className="daily-events__title">Daily meals</h1>
          <DailyEventEditWrapper
            title="Breakfast"
            recommended="Recomended 447 Kcal"
            quantity="356 kcal"
            content={<DailyEventEditData data={breakfast} />}
            className="daily-events__item daily-events__item_breakfast"
          />
          <DailyEventEditWrapper
            title="Lunch"
            recommended="Recomended 447 Kcal"
            className="daily-events__item daily-events__item_lunch"
            content={<DailyEventEditData data={lunch} />}
          />
          <DailyEventEditWrapper
            title="Dinner"
            recommended="Recomended 447 Kcal"
            className="daily-events__item daily-events__item_dinner"
            content={<DailyEventEditData data={dinner} />}
          />
          <DailyEventEditWrapper
            title="Snack"
            recommended="Recomended 447 Kcal"
            className="daily-events__item daily-events__item_snack"
            content={<DailyEventEditData data={snaks} />}
          />
        </div>
        <div className="daily-events__water">
          <h3 className="daily-events__title">Water consumed</h3>
          <DailyEventEditWrapper
            title="Water"
            quantity="0.75L (40%)"
            recommended="Recomended 2.0L (8 gls)"
            className="daily-events__item daily-events__item_water"
            content={getWaterConsumed()}
          />
        </div>
        <div className="daily-events__exercise">
          <h3 className="daily-events__title">Daily exercise</h3>
          <DailyEventEditWrapper
            title="Exercise"
            recommended="Last: Run 1 km"
            className="daily-events__item daily-events__item_exercise"
            content={<DailyEventEditData data={activities} />}
          />
        </div>
      </div>
      <div className="event__changes__btn">Save changes</div>
    </div>
  );
};

export default EditEventScreen;
