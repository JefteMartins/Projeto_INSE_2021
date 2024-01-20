import React, { useEffect, useState } from "react";
import { ChartsPie } from "./components/charts-pie";
import axios from "axios";
import { VerticalBar } from "./components/charts-vertical-bar";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContainer from "./components/main-container";
import { AsyncSearch } from "./components/async-search";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //console.log('inseData', inseData)
  return (
    <>
      <AsyncSearch />
      <MainContainer/>
    </>
  );
}

export default App;
