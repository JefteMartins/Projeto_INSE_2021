import React from "react";
import { Container } from "./styles";
import { faker } from "@faker-js/faker";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function VerticalBarSchool(props) {
  console.log("props", props);
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

  //const labels = props.infoData.map((item) => item.state);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const nivelPcEscola = props.schoolDetails;
  console.log(props.schoolDetails.pcNivel1);
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
        label: "# of Votes",
        data: [
          nivelPcEscola.pcNivel1,
          nivelPcEscola.pcNivel2,
          nivelPcEscola.pcNivel3,
          nivelPcEscola.pcNivel4,
          nivelPcEscola.pcNivel5,
          nivelPcEscola.pcNivel6,
          nivelPcEscola.pcNivel7,
          nivelPcEscola.pcNivel8,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(170, 255, 185, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <h4>Distribuição dos níveis da escola selecionada:</h4>
      <Doughnut data={data} />
    </Container>
  );
}
