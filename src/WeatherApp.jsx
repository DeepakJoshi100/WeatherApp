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
        .get("https://api.openweathermap.org/data/2.5/weather", { params: p })
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
      <div id="alpha1" className="">
        <div className="flex items-center justify-center gap-2 m-2">
          <input
            id="alpha"
            className=""
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
