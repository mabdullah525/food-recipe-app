import React from "react";
import Mainpage from "./Components/Mainpage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>

  );
}

export default App;
