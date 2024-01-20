import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChartsPie } from './components/charts-pie'
import axios from 'axios';




function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faça a chamada à API usando Axios
        const response = await axios.get('https://localhost:7291/api/Inse2021/SearchCount');
        console.log(response);
        // Extraia a contagem da resposta
        const { data } = response;
      } catch (error) {
        console.error('Erro ao fazer a chamada à API:', error);
      }
    };
  
    fetchData();
  }, []); // O array vazio [] faz com que o useEffect

  return (
    <>
      <ChartsPie/>
    </>
  )
}

export default App
