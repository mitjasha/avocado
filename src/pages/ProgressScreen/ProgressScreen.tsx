import React from "react";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import minus from "../../assets/svg/minus-light.svg";
import plus from "../../assets/svg/plus-light.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ProgressScreen.scss";

const ProgressScreen: React.FC = () => {
  const userWeight = 67 as number;
  const userTargetWeight = 63 as number;
  const userGoal = "lose weight" as string;
  let kgLeft = 0 as number;
  if (userGoal === "lose weight" && userTargetWeight < userWeight) {
    kgLeft = userWeight - userTargetWeight;
  } else if (userGoal === "gain weight" && userWeight < userTargetWeight) {
    kgLeft = userTargetWeight - userWeight;
  }
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

  return (
    <div className="progress-screen">
      <h1 className="progress-screen__title">Your Progress</h1>
      <div className="container">
        <div className="progress-screen__progress">
          <div style={{ position: "relative" }}>
            <div className="progress-screen__chart">
              <ChartComponent
                chartData={[userWeight, kgLeft]}
                colors={["#559C4F", "#FAFDF8"]}
                size={153}
                cutout={50}
                spacing={3}
              />
            </div>
            <div className="progress-screen_kg-left">{kgLeft} kg left</div>
          </div>
          <div className="progress-screen__slash" />
          <div className="progress-screen__curr-weight">
            Current weight is{" "}
            <span className="progress-screen__curr-weight_bg">
              {userWeight}
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
          <PlusMinusButton>
            <img src={minus} alt="minus" className="plus-minus-img" />
          </PlusMinusButton>
          <div className="pop-up__weight">67 kg</div>
          <PlusMinusButton>
            <img src={plus} alt="plus" className="plus-minus-img" />
          </PlusMinusButton>
        </div>
      </BasicModalComponent>
    </div>
  );
};
export default ProgressScreen;
