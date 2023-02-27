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
import profileController from "../../api/profile.controller";
import eventsController from "../../api/event.controller";

const EditEventScreen: React.FC = () => {
  const navigate = useNavigate();

  const [breakfast, setBreakfast] = useState<EventMealResponse[]>([]);
  const [lunch, setLunch] = useState<EventMealResponse[]>([]);
  const [dinner, setDinner] = useState<EventMealResponse[]>([]);
  const [snack, setSnack] = useState<EventMealResponse[]>([]);

  const [recomKcalPerDay, setRecomKcalPerDay] = useState<number>(0);
  const [recomWater, setRecomWater] = useState<number>(0);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);

  const [activity, setActivity] = useState<EventActivityResponse[]>([]);

  const profileID = JSON.parse(localStorage.getItem("profileID") as string);

  const getRecommendedKcal = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      const userAge = Math.floor(
        (new Date().getTime() - new Date(profile.birth).getTime()) /
          (24 * 3600 * 365.25 * 1000),
      );
      const maleRecomKcal = Math.round(
        (66 +
          13.7 * Number(profile.weight) +
          5 * Number(profile.height) -
          6.76 * userAge) *
          1.2,
      );
      const femaleRecomKcal = Math.round(
        (655 +
          9.6 * Number(profile.weight) +
          1.8 * Number(profile.height) -
          4.7 * userAge) *
          1.2,
      );
      if (profile.gender === "MALE") {
        if (profile.goal === "Lose weight") {
          setRecomKcalPerDay(Math.round(maleRecomKcal - maleRecomKcal * 0.2));
        } else if (profile.goal === "Gain weight") {
          setRecomKcalPerDay(Math.round(maleRecomKcal * 1.2));
        } else setRecomKcalPerDay(maleRecomKcal);
      } else if (profile.gender === "FEMALE") {
        if (profile.goal === "Lose weight") {
          setRecomKcalPerDay(
            Math.round(femaleRecomKcal - femaleRecomKcal * 0.2),
          );
        } else if (profile.goal === "Gain weight") {
          setRecomKcalPerDay(Math.round(femaleRecomKcal * 1.2));
        } else setRecomKcalPerDay(femaleRecomKcal);
      }
    }
  };

  const getRecomWater = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setRecomWater((Number(profile.weight) * 30) / 1000);
    }
  };

  const correctData = (date: number) => {
    return date > 9 ? `${date}` : `0${date}`;
  };

  const date = `${new Date().getFullYear()}-${correctData(
    new Date().getMonth() + 1,
  )}-${correctData(new Date().getDate())}`;

  const time = `${new Date().getFullYear()}-${correctData(
    new Date().getMonth() + 1,
  )}-${correctData(new Date().getDate())} ${correctData(
    new Date().getHours(),
  )}:${correctData(new Date().getMinutes())}`;

  const getMealEvents = async () => {
    const allMealEvents = await eventMealController.getEventsByDate(date);
    setBreakfast(allMealEvents.filter((item) => item.name === "breakfast"));
    setLunch(allMealEvents.filter((item) => item.name === "lunch"));
    setDinner(allMealEvents.filter((item) => item.name === "dinner"));
    setSnack(allMealEvents.filter((item) => item.name === "snack"));
  };

  const getActivityEvents = async () => {
    const allActivityEvents = await eventActivityController.getEventsByDate(
      date,
    );
    setActivity(allActivityEvents);
  };

  const getWater = async () => {
    const waterEvents = await eventsController.getEventsByDate(date);
    setWaterConsumed(waterEvents.length * 0.25);
  };

  const addWater = async () => {
    await eventsController.addEvent({
      name: "Drink",
      startTime: time,
      description: "",
    });

    setWaterConsumed(waterConsumed + 0.25);
  };

  const delWater = async () => {
    setWaterConsumed(waterConsumed - 0.25);
    const waterEvents = await eventsController.getEventsByDate(date);
    await eventsController.delEvent({
      id: waterEvents[0].id,
      name: waterEvents[0].name,
      startTime: waterEvents[0].startTime,
      description: waterEvents[0].description,
    });
  };

  function drawGlasses() {
    const content = [];
    const oneGlass = 0.25;
    const glasses = waterConsumed / oneGlass;
    for (let i = 0; i < glasses; i += 1) {
      content.push(<div className="glass" key={i} />);
    }
    return (
      <div className="glasses__container">
        <div className="glasses">{content}</div>
        <div className="glasses__control-btn">
          <PlusMinusButton
            className="minus-img"
            onClick={() => {
              delWater();
              drawGlasses();
            }}
          />
          <PlusMinusButton className="plus-img" onClick={addWater} />
        </div>
      </div>
    );
  }

  useEffect(() => {
    getRecommendedKcal();
    getRecomWater();
    drawGlasses();
    getWater();
    getMealEvents();
    getActivityEvents();
  }, [waterConsumed]);

  return (
    <div className="edit-event__screen">
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h1 className="daily-events__title">Daily meals</h1>
            <DailyEventEditWrapper
              title="Breakfast"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
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
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
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
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
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
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
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
              quantity={`${waterConsumed}L (${Math.round(
                (waterConsumed / recomWater) * 100,
              )}%)`}
              recommended={`Recomended ${recomWater
                .toFixed(2)
                .toString()}L (${Math.ceil(recomWater / 0.25)} glasses)`}
              className="daily-events__item daily-events__item_water"
              content={drawGlasses()}
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
