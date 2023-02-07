import React from "react";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
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
  const labels = Object.keys(eatenKcalPerDay);
  const chartData = Object.values(eatenKcalPerDay);
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
              labels={labels}
              chartData={chartData}
              size={200}
            />
            <button type="button" className="daily-data__btn">
              Update Weight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressScreen;
