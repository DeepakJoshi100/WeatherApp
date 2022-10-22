import React from "react";
import { NoData1, NoData2 } from "./Loading";

function WeatherRow({ weather, query }) {
  return (
    <>
      {!query ? (
        <div>
          <NoData1 />
        </div>
      ) : (
        <div>
          {weather.length === 0 ? (
            <div>
              <NoData2 />
            </div>
          ) : (
            <>
              <div className="mx-auto font-mono">
                <div className="flex gap-2 text-black font-black">
                  <div>City Name: </div>{" "}
                  <div className="text-red-700 font-bold">{query}</div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Temperature: </div>
                  <div className="text-red-500 font-semibold">
                    {weather.temp - 273.15} °C
                  </div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Feels Like: </div>
                  <div className="text-red-500 font-semibold">
                    {weather.feels_like - 273.15} °C
                  </div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Minimun Temperature: </div>
                  <div className="text-red-500 font-semibold">
                    {weather.temp_min - 273.15} °C
                  </div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Maximum Temperature: </div>
                  <div className="text-red-500 font-semibold">
                    {weather.temp_max - 273.15} °C
                  </div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Pressure: </div>
                  <div className="text-red-500 font-semibold">
                    {(weather.pressure * 100) / 6894.76} Psi
                  </div>
                </div>
                <div className="flex font-bold text-black gap-2">
                  <div>Humidity: </div>
                  <div className="text-red-500 font-semibold">
                    {weather.humidity} %
                  </div>
                </div>
                {weather.grnd_level > 0 && (
                  <div className="flex font-bold text-black gap-2">
                    <div>Ground Level: </div>
                    <div className="text-red-500 font-semibold">
                      {weather.grnd_level} m
                    </div>
                  </div>
                )}
                {weather.sea_level > 0 && (
                  <div className="flex font-bold text-black gap-2">
                    <div>Sea Level: </div>
                    <div className="text-red-500 font-semibold">
                      {weather.sea_level} m
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 my-10 font-black">
                  Enjoy Your's Lovely
                  <span className="text-3xl  flex items-center text-red-600 animate-pulse">
                    ❤
                  </span>
                  Day
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default WeatherRow;
