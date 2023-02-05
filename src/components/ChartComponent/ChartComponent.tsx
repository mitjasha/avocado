import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  chartData: number[];
  colors: string[];
  size: number;
  cutout: number;
  spacing: number;
}

const ChartComponent: React.FC<DoughnutProps> = ({
  chartData,
  colors,
  size,
  cutout,
  spacing,
}) => {
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: colors,
        spacing,
        borderRadius: 5,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout,
    responsive: true,
    maintainAspectRatio: false,
  };
  return <Doughnut options={options} data={data} width={size} height={size} />;
};

export default ChartComponent;
