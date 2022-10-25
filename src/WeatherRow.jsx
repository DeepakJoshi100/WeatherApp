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
                <div className="flex gap-2 font-black ">
                  <div>City Name: </div>{" "}
                  <div className="font-bold text-red-700">
                    {query.charAt(0).toUpperCase() + query.slice(1)}
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Temperature: </div>
                  <div className="font-semibold text-red-500">
                    {(weather.temp - 273.15).toFixed(2)} °C
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Feels Like: </div>
                  <div className="font-semibold text-red-500">
                    {(weather.feels_like - 273.15).toFixed(2)} °C
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Minimun Temperature: </div>
                  <div className="font-semibold text-red-500">
                    {(weather.temp_min - 273.15).toFixed(2)} °C
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Maximum Temperature: </div>
                  <div className="font-semibold text-red-500">
                    {(weather.temp_max - 273.15).toFixed(2)} °C
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Pressure: </div>
                  <div className="font-semibold text-red-500">
                    {((weather.pressure * 100) / 6894.76).toFixed(2)} Psi
                  </div>
                </div>
                <div className="flex gap-2 font-bold ">
                  <div>Humidity: </div>
                  <div className="font-semibold text-red-500">
                    {weather.humidity} %
                  </div>
                </div>
                {weather.grnd_level > 0 && (
                  <div className="flex gap-2 font-bold ">
                    <div>Ground Level: </div>
                    <div className="font-semibold text-red-500">
                      {weather.grnd_level} m
                    </div>
                  </div>
                )}
                {weather.sea_level > 0 && (
                  <div className="flex gap-2 font-bold ">
                    <div>Sea Level: </div>
                    <div className="font-semibold text-red-500">
                      {weather.sea_level} m
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 my-10 font-black">
                  Enjoy Your's Lovely
                  <span className="flex items-center text-3xl text-red-600 animate-pulse">
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
