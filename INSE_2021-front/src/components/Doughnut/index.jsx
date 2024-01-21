import React from "react";
import { Container } from "./styles";
import { faker } from "@faker-js/faker";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutSchool(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const nivelPc = props.schoolDetails;
  const data = {
    labels: [
      "Nível 1",
      "Nível 2",
      "Nível 3",
      "Nível 4",
      "Nível 5",
      "Nível 6",
      "Nível 7",
      "Nível 8",
    ],
    datasets: [
      {
        label: "# no nível",
        data: [
          nivelPc.pcNivel1,
          nivelPc.pcNivel2,
          nivelPc.pcNivel3,
          nivelPc.pcNivel4,
          nivelPc.pcNivel5,
          nivelPc.pcNivel6,
          nivelPc.pcNivel7,
          nivelPc.pcNivel8,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(170, 255, 185, 0.2)",
          "rgba(113, 105, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(170, 255, 185, 1)",
          "rgba(113, 105, 235, 1)",

        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <h4>Distribuição dos níveis da localidade selecionada:</h4>
      <Doughnut data={data} />
    </Container>
  );
}
