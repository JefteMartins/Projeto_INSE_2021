import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['% no nível 1', '% no nível 2', '% no nível 3', '% no nível 4', '% no nível 5', '% no nível 6', '% no nível 7', '% no nível 8' ],
  datasets: [
    {
      label: '% of Votes',
      data: [12, 19, 3, 5, 2, 3, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 50, 200, 0.2)',
        'rgba(200, 162, 150, 0.2)',
        'rgba(193, 102, 2, 0.2)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 50, 200, 1)',
        'rgba(200, 162, 150, 1)',
        'rgba(193, 102, 2, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function ChartsPie() {
  return <Pie data={data} />;
}
