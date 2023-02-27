import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import DailyEventEditWrapper from "../../components/DailyEventEditWrapper/DailyEventEditWrapper";
import DailyEventEditData from "../../components/DailyEventEditData/DailyEventEditData";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "../MainScreen/MainScreen.scss";
import "../../index.scss";
import {
  EventActivityResponse,
  EventMealResponse,
} from "../../api/api.interface";
import eventMealController from "../../api/event-meal.controller";
import eventActivityController from "../../api/event-activity.controller";

const EditEventScreen = () => {
  const navigate = useNavigate();
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
          <PlusMinusButton className="minus-img" />
          <PlusMinusButton className="plus-img" />
        </div>
      </div>
    );
  };

  const [breakfast, setBreakfast] = useState<EventMealResponse[]>([]);
  const [lunch, setLunch] = useState<EventMealResponse[]>([]);
  const [dinner, setDinner] = useState<EventMealResponse[]>([]);
  const [snack, setSnack] = useState<EventMealResponse[]>([]);

  const [activity, setActivity] = useState<EventActivityResponse[]>([]);

  const getMealEvents = async () => {
    const allMealEvents = await eventMealController.getEventsByDate(
      String(new Date()),
    );
    setBreakfast(allMealEvents.filter((item) => item.name === "breakfast"));
    setLunch(allMealEvents.filter((item) => item.name === "lunch"));
    setDinner(allMealEvents.filter((item) => item.name === "dinner"));
    setSnack(allMealEvents.filter((item) => item.name === "snack"));
  };

  const getActivityEvents = async () => {
    const allActivityEvents = await eventActivityController.getEventsByDate(
      String(new Date()),
    );
    setActivity(allActivityEvents);
  };

  useEffect(() => {
    getMealEvents();
    getActivityEvents();
  }, []);

  return (
    <div className="edit-event__screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h1 className="daily-events__title">Daily meals</h1>
            <DailyEventEditWrapper
              title="Breakfast"
              recommended="Recomended 447 Kcal"
              quantity={`${breakfast
                .reduce((acc, item) => {
                  return acc + (item.weight / 100) * item.product.calories_100g;
                }, 0)
                .toFixed(1)
                .toString()} kcal`}
              content={<DailyEventEditData type="meal" dataMeal={breakfast} />}
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventEditWrapper
              title="Lunch"
              recommended="Recomended 447 Kcal"
              quantity={`${lunch
                .reduce((acc, item) => {
                  return acc + (item.weight / 100) * item.product.calories_100g;
                }, 0)
                .toFixed(1)
                .toString()} kcal`}
              className="daily-events__item daily-events__item_lunch"
              content={<DailyEventEditData type="meal" dataMeal={lunch} />}
            />
            <DailyEventEditWrapper
              title="Dinner"
              recommended="Recomended 447 Kcal"
              quantity={`${dinner
                .reduce((acc, item) => {
                  return acc + (item.weight / 100) * item.product.calories_100g;
                }, 0)
                .toFixed(1)
                .toString()} kcal`}
              className="daily-events__item daily-events__item_dinner"
              content={<DailyEventEditData type="meal" dataMeal={dinner} />}
            />
            <DailyEventEditWrapper
              title="Snack"
              recommended="Recomended 447 Kcal"
              quantity={`${snack
                .reduce((acc, item) => {
                  return acc + (item.weight / 100) * item.product.calories_100g;
                }, 0)
                .toFixed(1)
                .toString()} kcal`}
              className="daily-events__item daily-events__item_snack"
              content={<DailyEventEditData type="meal" dataMeal={snack} />}
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
              content={
                <DailyEventEditData type="activity" dataActivity={activity} />
              }
            />
          </div>
        </div>
        <ButtonTemplate
          className="event__changes__btn"
          onClick={() => navigate("/main")}
        >
          Save changes
        </ButtonTemplate>
      </div>
    </div>
  );
};

export default EditEventScreen;
