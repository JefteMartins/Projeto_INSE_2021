import React, { useEffect, useState } from "react";
import MainContainer from "./components/main-container";

import { NavbarHome } from "./components/navbar";

function App() {
  return (
    <>
      <NavbarHome />
      <MainContainer/>
    </>
  );
}

export default App;
