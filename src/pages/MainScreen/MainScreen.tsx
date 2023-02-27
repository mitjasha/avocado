import React, { useState, useEffect } from "react";
import profileController from "../../api/profile.controller";
import DailyEventWrapper from "../../components/DailyEventWrapper/DailyEventWrapper";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import fireImg from "../../assets/svg/fire.svg";
import eatenImg from "../../assets/svg/eaten.svg";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import eventActivityController from "../../api/event-activity.controller";
import eventMealController from "../../api/event-meal.controller";
import eventsController from "../../api/event.controller";
import { useAppContext } from "../../context";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  const [recomKcalPerDay, setRecomKcalPerDay] = useState<number>(0);
  const [recomWater, setRecomWater] = useState<number>(0);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);
  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [targetWeight, setTargetWeight] = useState<number>(0);
  const [breakfastKcal, setBreakfastKcal] = useState<number>(0);
  const [lunchKcal, setLunchKcal] = useState<number>(0);
  const [dinnerKcal, setDinnerKcal] = useState<number>(0);
  const [snackKcal, setSnackKcal] = useState<number>(0);
  const [eatenProteins, setEatenProteins] = useState<number>(0);
  const [eatenFats, setEatenFats] = useState<number>(0);
  const [eatenCarbs, setEatenCarbs] = useState<number>(0);
  const [eatenKcal, setEatenKcal] = useState<number>(0);
  const [burntKcal, setBurntKcal] = useState<number>(0);
  const [lastActivity, setLastActivity] = useState({
    calories_per_min: 0,
    id: "",
    name: "No data",
  });

  const profileID = JSON.parse(localStorage.getItem("profileID") as string);

  const correctData = (date: number) => {
    return date > 9 ? `${date}` : `0${date}`;
  };

  const time = `${new Date().getFullYear()}-${correctData(
    new Date().getMonth() + 1,
  )}-${correctData(new Date().getDate())} ${correctData(
    new Date().getHours(),
  )}:${correctData(new Date().getMinutes())}`;

  const appContext = useAppContext();
  const date = localStorage.getItem("date") as string;

  const getEatenKcal = async () => {
    const eaten = await eventMealController.getEventsByDate(date);
    const breakfast = eaten.filter((item) => item.name === "breakfast");
    const lunch = eaten.filter((item) => item.name === "lunch");
    const dinner = eaten.filter((item) => item.name === "dinner");
    const snack = eaten.filter((item) => item.name === "snack");
    setBreakfastKcal(
      breakfast.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0),
    );
    setLunchKcal(
      lunch.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0),
    );
    setDinnerKcal(
      dinner.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0),
    );
    setSnackKcal(
      snack.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0),
    );
    setEatenKcal(
      eaten.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0),
    );
    setEatenProteins(
      eaten.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.proteins_100g;
      }, 0),
    );
    setEatenFats(
      eaten.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.fat_100g;
      }, 0),
    );
    setEatenCarbs(
      eaten.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.carbs_100g;
      }, 0),
    );
  };

  const getActivityKcal = async () => {
    const activity = await eventActivityController.getEventsByDate(date);
    if (activity.length > 0) {
      setBurntKcal(
        activity.reduce((acc, item) => {
          const duration =
            Date.parse(item.endTime) - Date.parse(item.startTime);
          let minutes = 0;
          if (duration < 3600000) {
            minutes = Math.floor((duration / (1000 * 60)) % 60);
          } else {
            minutes =
              Math.floor((duration / (1000 * 60 * 60)) % 24) * 60 +
              Math.floor((duration / (1000 * 60)) % 60);
          }
          const res = minutes * item.activity.calories_per_min;
          return acc + res;
        }, 0),
      );
    } else setBurntKcal(0);
  };

  const getLastActivity = async () => {
    const allActivities = await eventActivityController.getAllEvents();
    if (allActivities.length > 0) {
      setLastActivity(allActivities[allActivities.length - 1].activity);
    }
  };

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

  const getAvailable = (total: number, eaten: number) => {
    if (total > eaten) {
      return total - eaten;
    }
    return 0;
  };

  const addWater = async () => {
    await eventsController.addEvent({
      name: "Drink",
      startTime: time,
      description: "",
    });

    setWaterConsumed(waterConsumed + 0.25);
  };

  const drawGlasses = () => {
    const content = [];
    const oneGlass = 0.25;
    const glasses = waterConsumed / oneGlass;
    for (let i = 0; i < glasses; i += 1) {
      content.push(<div className="glass" key={i} />);
    }
    return <div className="glasses">{content}</div>;
  };

  const getCurrentWeight = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setCurrentWeight(Number(profile.weight));
    }
  };

  const getTargetWeight = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setTargetWeight(Number(profile.targetWeight));
    }
  };

  const changeWeight = async (up: boolean) => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      if (up === true) {
        setCurrentWeight(currentWeight + 0.1);
      } else {
        setCurrentWeight(currentWeight - 0.1);
      }
      await profileController.updateProfile({
        id: profileID,
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birth: profile.birth,
        weight: currentWeight,
        height: profile.height,
        goal: profile.goal,
        targetWeight: profile.targetWeight,
        photo: "",
        favorites: profile.favorites,
        recentRecipes: profile.recentRecipes,
      });
      const weightDisplay = document.querySelector(
        ".curr-weight-display",
      ) as HTMLElement;
      weightDisplay.textContent = `${currentWeight.toFixed(1).toString()} kg`;
    }
  };

  useEffect(() => {
    getRecommendedKcal();
    getRecomWater();
    getCurrentWeight();
    getTargetWeight();
    getEatenKcal();
    getActivityKcal();
    getLastActivity();
  }, []);

  useEffect(() => {
    getRecommendedKcal();
    getRecomWater();
    getCurrentWeight();
    getTargetWeight();
    getEatenKcal();
    getActivityKcal();
    getLastActivity();
  }, [appContext]);

  return (
    <div className="main-screen">
      <div className="daily-data">
        <div className="container">
          <div className="calories-chart">
            <div className="calories-chart__info">
              <img src={fireImg} alt="fire" />
              <p className="chart-data-num">
                {burntKcal.toFixed(1).toString()}
              </p>
              <h5 className="chart-data-title">Burnt</h5>
            </div>
            <div className="calories-chart__chart">
              <ChartComponent
                chartData={[
                  eatenKcal,
                  getAvailable(recomKcalPerDay, eatenKcal),
                  burntKcal,
                ]}
                colors={["#559C4F", "#fafdf8", "#FFA935"]}
                size={158}
                cutout={60}
                spacing={6}
              />
              <div className="kcal-available">
                <p className="kcal-available__num">
                  {getAvailable(recomKcalPerDay, eatenKcal)
                    .toFixed(1)
                    .toString()}
                </p>
                <h5 className="chart-data-title">Kcal available</h5>
              </div>
            </div>
            <div className="calories-chart__info">
              <img src={eatenImg} alt="fire" />
              <p className="chart-data-num">
                {eatenKcal.toFixed(1).toString()}
              </p>
              <h5 className="chart-data-title">Eaten</h5>
            </div>
          </div>
          <div className="goal-kcal">
            <p className="chart-data-num">
              {recomKcalPerDay.toFixed(1).toString()}
            </p>
            <h5 className="chart-data-title">Kcal goal</h5>
          </div>
          <div className="nutrients-charts">
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[
                    eatenCarbs,
                    getAvailable(
                      Math.round((recomKcalPerDay * 0.4) / 4),
                      eatenCarbs,
                    ),
                  ]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">
                  {eatenCarbs.toFixed(1).toString()}g
                </p>
                <h5 className="chart-data-title">Carbs</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[
                    eatenFats,
                    getAvailable(
                      Math.round((recomKcalPerDay * 0.3) / 9),
                      eatenFats,
                    ),
                  ]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">
                  {eatenFats.toFixed(1).toString()}g
                </p>
                <h5 className="chart-data-title">Fats</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[
                    eatenProteins,
                    getAvailable(
                      Math.round((recomKcalPerDay * 0.3) / 4),
                      eatenProteins,
                    ),
                  ]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">
                  {eatenProteins.toFixed(1).toString()}g
                </p>
                <h5 className="chart-data-title">Protein</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="daily-events">
          <EditButton className="daily-events__edit" to="/edit-event" />
          <div className="daily-events__meals">
            <h1 className="daily-events__title">Daily meals</h1>
            <DailyEventWrapper
              title="Breakfast"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              quantity={`${breakfastKcal.toFixed(1).toString()} kcal`}
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventWrapper
              title="Lunch"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              quantity={`${lunchKcal.toFixed(1).toString()} kcal`}
              className="daily-events__item daily-events__item_lunch"
            />
            <DailyEventWrapper
              title="Dinner"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              quantity={`${dinnerKcal.toFixed(1).toString()} kcal`}
              className="daily-events__item daily-events__item_dinner"
            />
            <DailyEventWrapper
              title="Snack"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              quantity={`${snackKcal.toFixed(1).toString()} kcal`}
              className="daily-events__item daily-events__item_snack"
            />
          </div>
          <div className="daily-events__water">
            <h3 className="daily-events__title">Water consumed</h3>
            <DailyEventWrapper
              title="Water"
              quantity={`${waterConsumed}L (${Math.round(
                (waterConsumed / recomWater) * 100,
              )}%)`}
              recommended={`Recomended ${recomWater
                .toFixed(2)
                .toString()}L (${Math.ceil(recomWater / 0.25)} glasses)`}
              className="daily-events__item daily-events__item_water"
              content={drawGlasses()}
              handleClick={addWater}
            />
          </div>
          <div className="daily-events__exercise">
            <h3 className="daily-events__title">Daily exercise</h3>
            <DailyEventWrapper
              title="Activity"
              quantity={`${burntKcal.toFixed(1).toString()} kcal burnt`}
              recommended={`Last: ${lastActivity.name}`}
              className="daily-events__item daily-events__item_exercise"
            />
          </div>
          <div className="daily-events__weight">
            <h3 className="daily-events__title">Body control</h3>
            <DailyEventWrapper
              title="Weight"
              recommended={`Target: ${targetWeight} kg`}
              className="daily-events__item daily-events__item_weight"
              handleClick={() => changeWeight(true)}
              minusButton={
                <PlusMinusButton
                  onClick={() => changeWeight(false)}
                  className="minus-img"
                />
              }
              curWeight={
                <p className="curr-weight-display">
                  {currentWeight.toFixed(1).toString()} kg
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
