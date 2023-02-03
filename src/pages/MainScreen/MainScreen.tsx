import React from "react";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  return (
    <div className="main-screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h3 className="daily-events__title">Daily meals</h3>
            <div className="daily-events__meal daily-events__meal_breakfast">
              <div className="meal-text">
                <p className="meal-title meal-title_breakfast">Breakfast</p>
                <p className="recom recom_breakfast">Recomended 447 Kcal</p>
              </div>
              <button type="button" className="add-meal" aria-label="plus" />
            </div>
            <div className="daily-events__meal daily-events__meal_lunch">
              <div className="meal-text">
                <p className="meal-title meal-title_lunch">Lunch</p>
                <p className="recom recom_lunch">Recomended 447 Kcal</p>
              </div>
              <button type="button" className="add-meal" aria-label="plus" />
            </div>
            <div className="daily-events__meal daily-events__meal_dinner">
              <div className="meal-text">
                <p className="meal-title meal-title_dinner">Dinner</p>
                <p className="recom recom_dinner">Recomended 447 Kcal</p>
              </div>
              <button type="button" className="add-meal" aria-label="plus" />
            </div>
            <div className="daily-events__meal daily-events__meal_snack">
              <div className="meal-text">
                <p className="meal-title meal-title_snack">Snack</p>
                <p className="recom recom_snack">Recomended 447 Kcal</p>
              </div>
              <button type="button" className="add-meal" aria-label="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
