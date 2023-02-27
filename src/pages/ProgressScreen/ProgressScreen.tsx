import React, { useEffect, useState } from "react";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ProgressScreen.scss";
import profileController from "../../api/profile.controller";
import eventMealController from "../../api/event-meal.controller";

const ProgressScreen: React.FC = () => {
  const openPopUp = () => {
    const popUp = document.querySelector(
      ".pop-up-wrapper",
    ) as HTMLButtonElement;
    popUp.style.opacity = "1";
    popUp.style.visibility = "visible";
  };

  const profileID = JSON.parse(localStorage.getItem("profileID") as string);

  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [targetWeight, setTargetWeight] = useState<number>(0);
  const [kgLeft, setKgLeft] = useState<number>(0);
  const [averageKcal, setAverageKcal] = useState<number>(0);

  const correctData = (date: number) => {
    return date > 9 ? `${date}` : `0${date}`;
  };

  const getEatenKcalPerDay = async (date: Date) => {
    const day = `${date.getFullYear()}-${correctData(
      date.getMonth() + 1,
    )}-${correctData(date.getDate())}`;

    const events = await eventMealController.getEventsByDate(day);
    if (events.length > 0) {
      return events.reduce((acc, item) => {
        return acc + (item.weight / 100) * item.product.calories_100g;
      }, 0);
    }
    return 0;
  };

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const oneDayEarlier = new Date(new Date().getTime() - 86400000);
  const twoDaysEarlier = new Date(new Date().getTime() - 172800000);
  const threeDaysEarlier = new Date(new Date().getTime() - 259200000);
  const fourDaysEarlier = new Date(new Date().getTime() - 345600000);
  const fiveDaysEarlier = new Date(new Date().getTime() - 432000000);
  const sixDaysEarlier = new Date(new Date().getTime() - 518400000);

  const [eatenKcalPerDay, setEatenKcalPerDay] = useState<object>({
    [`${sixDaysEarlier.getDate()} ${month[sixDaysEarlier.getMonth()]}`]: 0,
    [`${fiveDaysEarlier.getDate()} ${month[fiveDaysEarlier.getMonth()]}`]: 0,
    [`${fourDaysEarlier.getDate()} ${month[fourDaysEarlier.getMonth()]}`]: 0,
    [`${threeDaysEarlier.getDate()} ${month[threeDaysEarlier.getMonth()]}`]: 0,
    [`${twoDaysEarlier.getDate()} ${month[twoDaysEarlier.getMonth()]}`]: 0,
    [`${oneDayEarlier.getDate()} ${month[oneDayEarlier.getMonth()]}`]: 0,
    [`${today.getDate()} ${month[today.getMonth()]}`]: 0,
  });

  const getEatenKcalObject = async () => {
    setEatenKcalPerDay({
      [`${sixDaysEarlier.getDate()} ${month[sixDaysEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(sixDaysEarlier),
      [`${fiveDaysEarlier.getDate()} ${month[fiveDaysEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(fiveDaysEarlier),
      [`${fourDaysEarlier.getDate()} ${month[fourDaysEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(fourDaysEarlier),
      [`${threeDaysEarlier.getDate()} ${month[threeDaysEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(threeDaysEarlier),
      [`${twoDaysEarlier.getDate()} ${month[twoDaysEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(twoDaysEarlier),
      [`${oneDayEarlier.getDate()} ${month[oneDayEarlier.getMonth()]}`]:
        await getEatenKcalPerDay(oneDayEarlier),
      [`${today.getDate()} ${month[today.getMonth()]}`]:
        await getEatenKcalPerDay(today),
    });
  };

  const getAverageKcal = () => {
    const kcalValuesArr = Object.values(eatenKcalPerDay);
    setAverageKcal(
      kcalValuesArr.reduce((sum, elem) => {
        return sum + elem;
      }, 0) / kcalValuesArr.length,
    );
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
      setTargetWeight(profile.targetWeight);
    }
  };

  const getKgLeft = () => {
    if (profileID) {
      if (targetWeight < currentWeight) {
        setKgLeft(currentWeight - targetWeight);
      } else if (currentWeight < targetWeight) {
        setKgLeft(targetWeight - currentWeight);
      }
    }
  };

  const changeWeight = async (up: boolean) => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      if (up === true) {
        await profileController.updateProfile({
          id: profileID,
          firstName: profile.firstName,
          lastName: profile.lastName,
          gender: profile.gender,
          birth: profile.birth,
          weight: currentWeight + 0.1,
          height: profile.height,
          goal: profile.goal,
          targetWeight: profile.targetWeight,
          photo: "",
          favorites: profile.favorites,
          recentRecipes: profile.recentRecipes,
        });
        setCurrentWeight(currentWeight + 0.1);
      } else {
        await profileController.updateProfile({
          id: profileID,
          firstName: profile.firstName,
          lastName: profile.lastName,
          gender: profile.gender,
          birth: profile.birth,
          weight: currentWeight - 0.1,
          height: profile.height,
          goal: profile.goal,
          targetWeight: profile.targetWeight,
          photo: "",
          favorites: profile.favorites,
          recentRecipes: profile.recentRecipes,
        });
        setCurrentWeight(currentWeight - 0.1);
      }
    }
  };

  useEffect(() => {
    getTargetWeight();
    getCurrentWeight();
    getKgLeft();
    getAverageKcal();
    getEatenKcalObject();
  }, []);

  useEffect(() => {
    getCurrentWeight();
    getKgLeft();
  }, [currentWeight]);

  useEffect(() => {
    getAverageKcal();
  }, [eatenKcalPerDay]);

  return (
    <div className="progress-screen">
      <h1 className="progress-screen__title">Your Progress</h1>
      <div className="container">
        <div className="progress-screen__progress">
          <div style={{ position: "relative" }}>
            <div className="progress-screen__chart">
              <ChartComponent
                chartData={[currentWeight, kgLeft]}
                colors={["#559C4F", "#FAFDF8"]}
                size={153}
                cutout={50}
                spacing={3}
              />
            </div>
            <div className="progress-screen_kg-left">
              {kgLeft.toFixed(1).toString()} kg left
            </div>
          </div>
          <div className="progress-screen__slash" />
          <div className="progress-screen__curr-weight">
            Current weight is{" "}
            <span className="progress-screen__curr-weight_bg">
              {currentWeight.toFixed(1).toString()}
            </span>{" "}
            kg
          </div>
        </div>

        <div className="calories">
          <h2 className="calories__title">Calories</h2>
          <div className="calories__daily-data">
            <h3 className="daily-data__title">
              <span style={{ fontWeight: "200" }}>Average</span> <br />{" "}
              {averageKcal.toFixed(1).toString()} kcal
            </h3>
            <BarChartComponent
              labels={Object.keys(eatenKcalPerDay)}
              chartData={Object.values(eatenKcalPerDay)}
              size={200}
            />
            <ButtonTemplate onClick={openPopUp}>Update Weight</ButtonTemplate>
          </div>
        </div>
      </div>
      <BasicModalComponent title="Current Weight">
        <div className="pop-up__update">
          <PlusMinusButton
            onClick={() => changeWeight(false)}
            className="minus-img"
          />
          <div className="pop-up__weight">
            {currentWeight.toFixed(1).toString()} kg
          </div>
          <PlusMinusButton
            onClick={() => changeWeight(true)}
            className="plus-img"
          />
        </div>
      </BasicModalComponent>
    </div>
  );
};
export default ProgressScreen;
