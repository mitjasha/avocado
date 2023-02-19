import React, { useState, useEffect } from "react";
import profileController from "../../api/profile.controller";
import DailyEventWrapper from "../../components/DailyEventWrapper/DailyEventWrapper";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import minus from "../../assets/svg/minus-light.svg";
import fireImg from "../../assets/svg/fire.svg";
import eatenImg from "../../assets/svg/eaten.svg";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  const [recomKcalPerDay, setRecomKcalPerDay] = useState<number>(0);
  const [availableKcal, setAvailableKcal] = useState<number>(recomKcalPerDay);
  const [recomProteins, setRecomProteins] = useState<number>(0);
  const [availableProteins, setAvailableProteins] =
    useState<number>(recomProteins);
  const [recomFats, setRecomFats] = useState<number>(0);
  const [availableFats, setAvailableFats] = useState<number>(recomFats);
  const [recomCarbs, setRecomCarbs] = useState<number>(0);
  const [availableCarbs, setAvailableCarbs] = useState<number>(recomCarbs);
  const [recomWater, setRecomWater] = useState<number>(0);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);
  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [targetWeight, setTargetWeight] = useState<number>(0);

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

  const getRecomNutritions = () => {
    setRecomProteins(Math.round((recomKcalPerDay * 0.3) / 4));
    setRecomFats(Math.round((recomKcalPerDay * 0.3) / 9));
    setRecomCarbs(Math.round((recomKcalPerDay * 0.4) / 4));
  };

  const getRecomWater = async () => {
    if (profileID) {
      const profile = await profileController.getProfileById(profileID);
      setRecomWater((Number(profile.weight) * 30) / 1000);
    }
  };

  const getAvailable = (
    total: number,
    eaten: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    setState(total - eaten);
  };

  const addWater = () => {
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

  const upWeight = () => {
    setCurrentWeight(currentWeight + 0.1);
    const weightDisplay = document.querySelector(
      ".curr-weight-display",
    ) as HTMLElement;
    weightDisplay.textContent = `${currentWeight.toFixed(1).toString()} kg`;
  };

  const downWeight = () => {
    setCurrentWeight(currentWeight - 0.1);
    const weightDisplay = document.querySelector(
      ".curr-weight-display",
    ) as HTMLElement;
    weightDisplay.textContent = `${currentWeight.toFixed(1).toString()} kg`;
  };

  const eatenKcal = 536;
  const eatenProtein = 43;
  const eatenFats = 15;
  const eatenCarbs = 150;
  const burntKcal = 690;

  useEffect(() => {
    getRecommendedKcal();
    getAvailable(recomKcalPerDay, eatenKcal, setAvailableKcal);
    getRecomNutritions();
    getAvailable(recomProteins, eatenProtein, setAvailableProteins);
    getAvailable(recomFats, eatenFats, setAvailableFats);
    getAvailable(recomCarbs, eatenCarbs, setAvailableCarbs);
    getRecomWater();
    getCurrentWeight();
    getTargetWeight();
  }, []);

  return (
    <div className="main-screen">
      <div className="daily-data">
        <div className="container">
          <div className="calories-chart">
            <div className="calories-chart__info">
              <img src={fireImg} alt="fire" />
              <p className="chart-data-num">{burntKcal}</p>
              <h5 className="chart-data-title">Burnt</h5>
            </div>
            <div className="calories-chart__chart">
              <ChartComponent
                chartData={[eatenKcal, availableKcal, burntKcal]}
                colors={["#559C4F", "#fafdf8", "#FFA935"]}
                size={158}
                cutout={60}
                spacing={6}
              />
              <div className="kcal-available">
                <p className="kcal-available__num">{availableKcal}</p>
                <h5 className="chart-data-title">Kcal available</h5>
              </div>
            </div>
            <div className="calories-chart__info">
              <img src={eatenImg} alt="fire" />
              <p className="chart-data-num">{eatenKcal}</p>
              <h5 className="chart-data-title">Eaten</h5>
            </div>
          </div>
          <div className="goal-kcal">
            <p className="chart-data-num">{recomKcalPerDay}</p>
            <h5 className="chart-data-title">Kcal goal</h5>
          </div>
          <div className="nutrients-charts">
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[eatenCarbs, availableCarbs]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenCarbs}g</p>
                <h5 className="chart-data-title">Carbs</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[eatenFats, availableFats]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenFats}g</p>
                <h5 className="chart-data-title">Fats</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <div>
                <ChartComponent
                  chartData={[eatenProtein, availableProteins]}
                  colors={["#559C4F", "#fafdf8"]}
                  size={60}
                  cutout={15}
                  spacing={3}
                />
              </div>
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenProtein}g</p>
                <h5 className="chart-data-title">Protein</h5>
              </div>
            </div>
          </div>
          {/* <div className="daily-data__status">now: fasting</div> */}
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
              quantity="356 kcal"
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventWrapper
              title="Lunch"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              className="daily-events__item daily-events__item_lunch"
            />
            <DailyEventWrapper
              title="Dinner"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
              className="daily-events__item daily-events__item_dinner"
            />
            <DailyEventWrapper
              title="Snack"
              recommended={`Recomended ${Math.round(recomKcalPerDay / 4)} Kcal`}
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
              recommended={`Recomended ${recomWater}L (${Math.ceil(
                recomWater / 0.25,
              )} glasses)`}
              className="daily-events__item daily-events__item_water"
              content={drawGlasses()}
              handleClick={addWater}
            />
          </div>
          <div className="daily-events__exercise">
            <h3 className="daily-events__title">Daily exercise</h3>
            <DailyEventWrapper
              title="Activity"
              recommended="Last: Run 1 km"
              className="daily-events__item daily-events__item_exercise"
            />
          </div>
          <div className="daily-events__weight">
            <h3 className="daily-events__title">Body control</h3>
            <DailyEventWrapper
              title="Weight"
              recommended={`Target: ${targetWeight} kg`}
              className="daily-events__item daily-events__item_weight"
              handleClick={upWeight}
              minusButton={
                <PlusMinusButton onClick={downWeight}>
                  <img src={minus} alt="minus" className="plus-minus-img" />
                </PlusMinusButton>
              }
              curWeight=<p className="curr-weight-display">
                {currentWeight} kg
              </p>
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
