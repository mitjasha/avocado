import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarProps {
  chartData: number[];
  labels: string[];
  size: number;
}

const BarChartComponent: React.FC<BarProps> = ({ chartData, labels, size }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Kcal Per Day",
        data: chartData.map((num) => num),
        backgroundColor: "#c6e8aa",
        borderRadius: 50,
        barPercentage: 0.5,
        hoverBackgroundColor: "#559c4f",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar data={data} options={options} width={size} height={size} />;
};

export default BarChartComponent;
