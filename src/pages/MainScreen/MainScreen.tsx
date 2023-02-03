import React from "react";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  return (
    <div className="main-screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-meals">
            <h3 className="daily-events__title">Daily meals</h3>
            <div className="daily-events__meal daily-events__meal_breakfast">
              <p className="meal-title meal-title_breakfast">Breakfast</p>
            </div>
            <div className="daily-events__meal daily-events__meal_lunch">
              <p className="meal-title meal-title_lunch">Lunch</p>
            </div>
            <div className="daily-events__meal daily-events__meal_dinner">
              <p className="meal-title meal-title_dinner">Dinner</p>
            </div>
            <div className="daily-events__meal daily-events__meal_snack">
              <p className="meal-title meal-title_snack">Snack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
