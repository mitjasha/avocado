import React from "react";
import DailyEventWrapper from "../../components/DailyEventWrapper/DailyEventWrapper";
import PlusMinusButton from "../../components/Buttons/PlusMinusButton/PlusMinusButton";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import minus from "../../assets/svg/minus-light.svg";
import fire from "../../assets/svg/fire.svg";
import eaten from "../../assets/svg/eaten.svg";
import "./MainScreen.scss";

const MainScreen: React.FC = () => {
  const getWaterConsumed = () => {
    const content = [];
    const litreConsumed = 0.75; // будем получать эти данные из бд
    const oneGlass = 0.25;
    const glasses = litreConsumed / oneGlass;
    for (let i = 0; i < glasses; i += 1) {
      content.push(<div className="glass" key={i} />);
    }
    return <div className="glasses">{content}</div>;
  };

  const recomKcalPerDay = 2181;
  const burntKcal = 690;
  const eatenKcal = 536;
  const availableKcal = recomKcalPerDay - eatenKcal;
  const recomCarbs = 250;
  const eatenCarbs = 150;
  const availableCarbs = recomCarbs - eatenCarbs;
  const recomFats = 40;
  const eatenFats = 15;
  const availableFats = recomFats - eatenFats;
  const recomProtein = 68;
  const eatenProtein = 43;
  const availableProtein = recomProtein - eatenProtein;

  return (
    <div className="main-screen">
      <div className="daily-data">
        <div className="container">
          <div className="calories-chart">
            <div className="calories-chart__info">
              <img src={fire} alt="fire" />
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
            </div>
            <div className="calories-chart__info">
              <img src={eaten} alt="fire" />
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
              <ChartComponent
                chartData={[eatenCarbs, availableCarbs]}
                colors={["#559C4F", "#fafdf8"]}
                size={60}
                cutout={15}
                spacing={3}
              />
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenCarbs}g</p>
                <h5 className="chart-data-title">Carbs</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <ChartComponent
                chartData={[eatenFats, availableFats]}
                colors={["#559C4F", "#fafdf8"]}
                size={60}
                cutout={15}
                spacing={3}
              />
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenFats}g</p>
                <h5 className="chart-data-title">Fats</h5>
              </div>
            </div>
            <div className="nutrients-charts__item">
              <ChartComponent
                chartData={[eatenProtein, availableProtein]}
                colors={["#559C4F", "#fafdf8"]}
                size={60}
                cutout={15}
                spacing={3}
              />
              <div className="chart-info">
                <p className="chart-data-num nutrients-num">{eatenProtein}g</p>
                <h5 className="chart-data-title">Protein</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="daily-events">
          <div className="daily-events__meals">
            <h1 className="daily-events__title">Daily meals</h1>
            <DailyEventWrapper
              title="Breakfast"
              recommended="Recomended 447 Kcal"
              quantity="356 kcal"
              className="daily-events__item daily-events__item_breakfast"
            />
            <DailyEventWrapper
              title="Lunch"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_lunch"
            />
            <DailyEventWrapper
              title="Dinner"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_dinner"
            />
            <DailyEventWrapper
              title="Snack"
              recommended="Recomended 447 Kcal"
              className="daily-events__item daily-events__item_snack"
            />
          </div>
          <div className="daily-events__water">
            <h3 className="daily-events__title">Water consumed</h3>
            <DailyEventWrapper
              title="Water"
              quantity="0.75L (40%)"
              recommended="Recomended 2.0L (8 gls)"
              className="daily-events__item daily-events__item_water"
              content={getWaterConsumed()}
            />
          </div>
          <div className="daily-events__exercise">
            <h3 className="daily-events__title">Daily exercise</h3>
            <DailyEventWrapper
              title="Exercise"
              recommended="Last: Run 1 km"
              className="daily-events__item daily-events__item_exercise"
            />
          </div>
          <div className="daily-events__weight">
            <h3 className="daily-events__title">Body control</h3>
            <DailyEventWrapper
              title="Weight"
              recommended="Target: 70.0 kg"
              className="daily-events__item daily-events__item_weight"
              minusButton={
                <PlusMinusButton>
                  <img src={minus} alt="minus" className="plus-minus-img" />
                </PlusMinusButton>
              }
              curWeight=<p style={{ fontSize: "26px" }}>77.0 kg</p>
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
