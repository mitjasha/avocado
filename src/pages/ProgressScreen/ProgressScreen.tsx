import React, { useEffect, useState } from "react";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import minus from "../../assets/svg/minus-light.svg";
import plus from "../../assets/svg/plus-light.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ProgressScreen.scss";
import profileController from "../../api/profile.controller";

const ProgressScreen: React.FC = () => {
  const userDailyKcalRecom = 1563 as number;
  const eatenKcalPerDay = {
    "27 Jan": 1217,
    "28 Jan": 1734,
    "29 Jan": 1578,
    "30 Jan": 1601,
  };
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

  const getKgLeft = async () => {
    if (profileID) {
      if (targetWeight < currentWeight) {
        setKgLeft(currentWeight - targetWeight);
      } else if (currentWeight < targetWeight) {
        setKgLeft(targetWeight - currentWeight);
      }
    }
  };

  const upWeight = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setCurrentWeight(currentWeight + 0.1);
      await profileController.updateProfile({
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birth: profile.birth,
        weight: String(currentWeight),
        height: profile.height,
        goal: profile.goal,
        targetWeight: profile.targetWeight,
        photo: "",
        id: profileID,
      });
    }
  };

  const downWeight = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setCurrentWeight(currentWeight - 0.1);
      await profileController.updateProfile({
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birth: profile.birth,
        weight: String(currentWeight),
        height: profile.height,
        goal: profile.goal,
        targetWeight: profile.targetWeight,
        photo: "",
        id: profileID,
      });
    }
  };

  useEffect(() => {
    getCurrentWeight();
    getTargetWeight();
    getKgLeft();
  }, []);

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
              {userDailyKcalRecom} kcal
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
          <PlusMinusButton onClick={downWeight}>
            <img src={minus} alt="minus" className="plus-minus-img" />
          </PlusMinusButton>
          <div className="pop-up__weight">
            {currentWeight.toFixed(1).toString()} kg
          </div>
          <PlusMinusButton onClick={upWeight}>
            <img src={plus} alt="plus" className="plus-minus-img" />
          </PlusMinusButton>
        </div>
      </BasicModalComponent>
    </div>
  );
};
export default ProgressScreen;
