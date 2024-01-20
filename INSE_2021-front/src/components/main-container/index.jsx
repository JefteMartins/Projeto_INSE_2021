import React, { useEffect, useState } from "react";
import { ChartsPie } from "../charts-pie";
import axios from "axios";
import { VerticalBar } from "../charts-vertical-bar";
import { AsyncSearch } from "../async-search";
import Spinner from "react-bootstrap/Spinner";
import { Graphic, GraphicContainer } from "./styles";

export function MainContainer() {
  const [loading, setLoading] = useState(true);
  const [inseData, setInseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7291/api/Inse2021/SearchCount"
        );
        setInseData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao fazer a chamada à API:", error);
      }
    };
    fetchData();
  }, []);
  //console.log('inseData', inseData)
  return (
    <GraphicContainer>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Graphic>
            <VerticalBar
              infoData={inseData.countByEstado}
              totalCount={inseData.count}
            />
          </Graphic>
          <Graphic>
            <ChartsPie data={inseData.countByInseClassificacao} />
          </Graphic>
        </>
      )}
    </GraphicContainer>
  );
}

export default MainContainer;
