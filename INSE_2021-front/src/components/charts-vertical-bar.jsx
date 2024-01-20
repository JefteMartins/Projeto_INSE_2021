import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBar(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  

  const labels = props.infoData.map((item) => item.state)

  const data = {
    labels,
    datasets: [
      {
        label: 'Quantidade de escola por estado',
        data: props.infoData.map((item) => item.count),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return <Bar options={options} data={data} />;
}