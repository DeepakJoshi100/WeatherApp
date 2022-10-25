import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import WeatherApp from "./WeatherApp";
import { ToggleSlider } from "react-toggle-slider";

function App() {
  // console.log(document.getElementById("alpha").className);

  const light_theme =
    "bg-gray-200 border-gray-700 border-4 rounded-md text-gray-700";

  const light_theme_index =
    "border-4 border-gray-700 focus:border-blue-700 w-full p-2 font-semibold rounded-full outline-none";

  const light_theme_bg =
    "w-full h-full max-w-2xl py-4 mx-auto my-6 rounded-md bg-gray-100";

  const dark_theme =
    "bg-gray-700 border-gray-200 border-4 rounded-md text-gray-200";

  const dark_theme_index =
    "border-4 border-gray-200 focus:border-blue-400 w-full p-2 font-semibold rounded-full outline-none";

  const dark_theme_bg =
    "w-full h-full max-w-2xl py-4 mx-auto my-6 rounded-md bg-gray-500";

  const [theme, setTheme] = useState(light_theme);
  const [indexTheme, setIndexTheme] = useState(light_theme_index);
  const [bgTheme, setbgTheme] = useState(light_theme_bg);
  const Theme = () => {
    theme === dark_theme ? setTheme(light_theme) : setTheme(dark_theme);
    indexTheme === dark_theme_index
      ? setIndexTheme(light_theme_index)
      : setIndexTheme(dark_theme_index);
    bgTheme === dark_theme_bg
      ? setbgTheme(light_theme_bg)
      : setbgTheme(dark_theme_bg);
  };

  useEffect(() => {
    document.body.className = theme;
    document.getElementById("alpha").className = indexTheme;
    document.getElementById("alpha1").className = bgTheme;
  }, [theme]);

  return (
    <>
      <div className="flex flex-col">
        <div className="fixed flex items-start justify-start md:bottom-3 md:left-4">
          <div className="w-12 font-black text-gray-700">
            {theme === light_theme && "Dark"}{" "}
          </div>
          <button onClick={Theme}>
            <ToggleSlider />
          </button>
          <div className="w-12 font-black text-white font-gray-700">
            {theme === dark_theme && "light"}{" "}
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
