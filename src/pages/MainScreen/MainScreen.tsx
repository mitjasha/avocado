import React from "react";
import DailyEventWrapper from "../../components/DailyEventWrapper/DailyEventWrapper";
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
              className="daily-events__meal daily-events__meal_breakfast"
            />
            <DailyEventWrapper
              title="Lunch"
              recommended="Recomended 447 Kcal"
              className="daily-events__meal daily-events__meal_lunch"
            />
            <DailyEventWrapper
              title="Dinner"
              recommended="Recomended 447 Kcal"
              className="daily-events__meal daily-events__meal_dinner"
            />
            <DailyEventWrapper
              title="Snack"
              recommended="Recomended 447 Kcal"
              className="daily-events__meal daily-events__meal_snack"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
