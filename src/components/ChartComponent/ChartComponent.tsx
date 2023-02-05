import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  chartData: number[];
  colors: string[];
  size: number;
}

const ChartComponent: React.FC<DoughnutProps> = ({
  chartData,
  colors,
  size,
}) => {
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: colors,
        spacing: 6,
        borderRadius: 5,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: 60,
  };
  return <Doughnut options={options} data={data} height={size} width={size} />;
};

export default ChartComponent;
