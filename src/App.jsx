import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import WeatherApp from "./WeatherApp";
import { ToggleSlider } from "react-toggle-slider";

function App() {
  const [theme, setTheme] = useState("bg-gray-200");
  const Theme = () => {
    theme === "bg-gray-700" ? setTheme("bg-gray-200") : setTheme("bg-gray-700");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="flex flex-col">
        <div className="fixed bottom-0 flex items-start justify-start ">
          <div className="w-12 font-black text-gray-700">
            {theme === "bg-gray-200" && "Dark"}{" "}
          </div>
          <button onClick={Theme}>
            <ToggleSlider />
          </button>
          <div className="w-12 font-black text-white font-gray-700">
            {theme === "bg-gray-700" && "light"}{" "}
          </div>
        </div>
        <div className="grow">
          <Routes>
            <Route index element={<WeatherApp />}></Route>
            <Route path="/WeatherApp/:query" element={<WeatherApp />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
