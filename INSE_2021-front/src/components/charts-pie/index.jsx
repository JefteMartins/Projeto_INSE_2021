import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartsPie(props) {
  props.data.sort((a, b) => {
    const classificacaoA = a.inseClassificacao.toLowerCase();
    const classificacaoB = b.inseClassificacao.toLowerCase();

    if (classificacaoA < classificacaoB) {
      return -1;
    }
    if (classificacaoA > classificacaoB) {
      return 1;
    }
    return 0;
  });

  const data = {
    labels: props.data.map((item) => item.inseClassificacao),
    datasets: [
      {
        label: "%",
        data: props.data.map((item) => item.count),
        options: {
          maintainAspectRatio: false,
        },
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 50, 200, 0.2)",
          "rgba(200, 162, 150, 0.2)",
          "rgba(193, 102, 2, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 50, 200, 1)",
          "rgba(200, 162, 150, 1)",
          "rgba(193, 102, 2, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <h1>Distribuição de Escolas por nível</h1>
      <Pie data={data} />
    </Container>
  );
}
