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

interface DoughnutProps {
  chartData: number[];
  labels: string[];
  size: number;
}

const BarChartComponent: React.FC<DoughnutProps> = ({
  chartData,
  labels,
  size,
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: chartData.map((num) => num),
        backgroundColor: "#559c4f",
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return <Bar options={options} data={data} width={size} height={size} />;
};

export default BarChartComponent;
