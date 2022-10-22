import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherRow from "./WeatherRow";
import { Loading2 } from "./Loading";

function WeatherApp() {
  const [query, setQuery] = useState("Delhi");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      const p = {
        q: query,
        APPID: "8ab263e745b75e176585cff1e2076f9b",
      };
      axios
        .get("http://api.openweathermap.org/data/2.5/weather", { params: p })
        .then((wea) => {
          setWeather(wea.data.main);
          setLoading(false);
        })
        .catch(() => {
          setWeather([]);
          setLoading(false);
        });
    },
    [query]
  );

  return (
    <>
      <div className="w-full bg-gray-100 h-full max-w-2xl mx-auto">
        <div className="flex gap-2 items-center justify-center m-2">
          <input
            className="w-full border-4 border-blue-200 outline-none focus:border-blue-400 rounded-full p-2 font-semibold"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a city"
          />
        </div>

        <div className="flex flex-col items-center justify-center m-4">
          {loading ? (
            <div>
              <Loading2 />
            </div>
          ) : (
            <WeatherRow weather={weather} query={query} />
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
