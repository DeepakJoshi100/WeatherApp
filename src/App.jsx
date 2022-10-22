import React from "react";
import { Routes, Route } from "react-router";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<WeatherApp />}></Route>
        <Route path="/WeatherApp/:query" element={<WeatherApp />}></Route>
      </Routes>
    </>
  );
}

export default App;
