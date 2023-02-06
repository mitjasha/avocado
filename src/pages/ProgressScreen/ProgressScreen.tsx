import React from "react";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
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
  return (
    <div className="progress-screen">
      <h1 className="progress-screen__title">Your Progress</h1>
      <div className="container progress-screen-container">
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
          <span className="progress-screen__curr-weight_bg">{userWeight}</span>{" "}
          kg
        </div>
      </div>
    </div>
  );
};
export default ProgressScreen;
