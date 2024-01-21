import React, { useEffect, useState } from "react";
import { ChartsPie } from "../charts-pie";
import axios from "axios";
import { VerticalBar } from "../charts-vertical-bar";
import Spinner from "react-bootstrap/Spinner";
import {
  Graphic,
  GraphicContainer,
  Container,
  GraphicPie,
  RegiaoGraphic,
  Title,
  SpinnerContainer,
} from "./styles";
import { DoughnutSchool } from "../Doughnut";

export function MainContainer() {
  const [loading, setLoading] = useState(true);
  const [inseData, setInseData] = useState([]);
  const [mediaRegioes, setMediaRegioes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7291/api/Inse2021/SearchCount"
        );
        const response2 = await axios.get(
          "https://localhost:7291/api/Inse2021/MediasRegioes"
        );
        setInseData(response.data);
        setMediaRegioes(response2.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao fazer a chamada à API:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <GraphicContainer>
      {loading ? (
        <SpinnerContainer>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerContainer>
      ) : (
        <Container>
          <Graphic>
            <VerticalBar
              infoData={inseData.countByEstado}
              totalCount={inseData.count}
            />
          </Graphic>
          <GraphicPie>
            <ChartsPie data={inseData.countByInseClassificacao} />
          </GraphicPie>
          <Title>Média de INSE por região em %</Title>
          <RegiaoGraphic>
            <DoughnutSchool
              localidade={"Nordeste"}
              schoolDetails={mediaRegioes.mediaNordeste}
            />
            <DoughnutSchool
              localidade={"Norte"}
              schoolDetails={mediaRegioes.mediaNorte}
            />
            <DoughnutSchool
              localidade={"Centro-Oeste"}
              schoolDetails={mediaRegioes.mediaCentroOeste}
            />
            <DoughnutSchool
              localidade={"Sudeste"}
              schoolDetails={mediaRegioes.mediaSudeste}
            />
            <DoughnutSchool
              localidade={"Sul"}
              schoolDetails={mediaRegioes.mediaSul}
            />
          </RegiaoGraphic>
        </Container>
      )}
    </GraphicContainer>
  );
}

export default MainContainer;
