import React from "react";
import DailyEventWrapper from "../../components/DailyEventWrapper/DailyEventWrapper";
import MinusButton from "../../components/Buttons/MinusButton/MinusButton";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  return (
    <div className="main-screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h3 className="daily-events__title">Daily meals</h3>
            <DailyEventWrapper
              title="Breakfast"
              recommended="Recomended 447 Kcal"
              quantity="356 kcal"
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventWrapper
              title="Lunch"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_lunch"
            />
            <DailyEventWrapper
              title="Dinner"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_dinner"
            />
            <DailyEventWrapper
              title="Snack"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_snack"
            />
          </div>
          <div className="daily-events__water">
            <h3 className="daily-events__title">Water consumed</h3>
            <DailyEventWrapper
              title="Water"
              quantity="0.75L (40%)"
              recommended="Recomended 2.0L"
              className="daily-events__item daily-events__item_water"
              content=<div className="glasses">
                <div className="glass" />
                <div className="glass" />
                <div className="glass" />
                <div className="glass" />
              </div>
            />
          </div>
          <div className="daily-events__exercise">
            <h3 className="daily-events__title">Daily exercise</h3>
            <DailyEventWrapper
              title="Exercise"
              recommended="Last: Run 1 km"
              className="daily-events__item daily-events__item_exercise"
            />
          </div>
          <div className="daily-events__weight">
            <h3 className="daily-events__title">Body control</h3>
            <DailyEventWrapper
              title="Weight"
              recommended="Target: 70.0 kg"
              className="daily-events__item daily-events__item_weight"
              minusButton={<MinusButton />}
              curWeight=<p style={{ fontSize: "26px" }}>77.0 kg</p>
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
