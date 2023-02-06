import React from "react";
import "./ProgressScreen.scss";

const ProgressScreen: React.FC = () => {
  const userWeight = 67 as number;
  const userTargetWeight = 63 as number;
  const userGoal = "lose weight" as string;
  let kgLeft;
  if (userGoal === "lose weight" && userTargetWeight < userWeight) {
    kgLeft = userWeight - userTargetWeight;
  } else if (userGoal === "gain weight" && userWeight < userTargetWeight) {
    kgLeft = userTargetWeight - userWeight;
  }
  return (
    <div className="progress-screen">
      <h1 className="progress-screen__title">Your Progress</h1>
      <div className="container">
        <div className="progress-screen__chart">1</div>
        <div className="progress-screen_kg-left">{kgLeft} kg left</div>
      </div>
    </div>
  );
};
export default ProgressScreen;
