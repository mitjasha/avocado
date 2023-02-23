import React from "react";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import minus from "../../assets/svg/minus-light.svg";
import plus from "../../assets/svg/plus-light.svg";
import DailyEventEditWrapper from "../../components/DailyEventEditWrapper/DailyEventEditWrapper";
import DailyEventEditData from "../../components/DailyEventEditData/DailyEventEditData";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "../MainScreen/MainScreen.scss";
import "../../index.scss";

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

  return (
    <div className="edit-event__screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h1 className="daily-events__title">Daily meals</h1>
            <DailyEventEditWrapper
              title="Breakfast"
              recommended="Recomended 447 Kcal"
              quantity="356 kcal"
              content={<DailyEventEditData type="meal" data={breakfast} />}
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventEditWrapper
              title="Lunch"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_lunch"
              content={<DailyEventEditData type="meal" data={lunch} />}
            />
            <DailyEventEditWrapper
              title="Dinner"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_dinner"
              content={<DailyEventEditData type="meal" data={dinner} />}
            />
            <DailyEventEditWrapper
              title="Snack"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_snack"
              content={<DailyEventEditData type="meal" data={snaks} />}
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
              content={<DailyEventEditData type="activity" data={activities} />}
            />
          </div>
        </div>
      </div>
      <ButtonTemplate className="event__changes__btn">
        Save changes
      </ButtonTemplate>
    </div>
  );
};

export default EditEventScreen;
