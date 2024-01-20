import React, { useEffect, useState } from "react";
import "./App.css";
import { ChartsPie } from "./components/charts-pie";
import axios from "axios";
import { VerticalBar } from "./components/charts-vertical-bar";
import Spinner from "react-bootstrap/Spinner";
import { Pie } from "react-chartjs-2";

function App() {
  const [loading, setLoading] = useState(true);
  const [inseData, setInseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7291/api/Inse2021/SearchCount"
        );
        response.data.countByEstado = response.data.countByEstado.sort((a, b) => {
          const stateA = a.state.toLowerCase();
          const stateB = b.state.toLowerCase();
        
          if (stateA < stateB) {
            return -1;
          }
          if (stateA > stateB) {
            return 1;
          }
          return 0;
        }
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
    <>
      {/* se tiver loading retornar spinner. Se nao, retornar as escolas participantes e vertical bar  com ternário*/}
      {loading ? (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>) : (<>
      <h1>Escolas participantes: {inseData.count}</h1>
      <VerticalBar infoData={inseData.countByEstado}
      />
      {/* <ChartsPie data={inseData.countByInseClassificacao} /> */}
      </>)}
    </>
  );
}

export default App;
