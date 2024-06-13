import React from "react";

const Weather = ({ WeatherData }) => {
  return (
    <div>
      {WeatherData.weather ? (
        <div className="w-[500px] h-[350px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%] flex flex-col justify-between">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex flex-col items-start">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {WeatherData.name}, {WeatherData.sys.country}
                  </p>
                  <p className="text-sm">
                    {WeatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {Math.round(WeatherData.main.temp)}°C
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-end">
              <div className="relative w-24 h-24">
                <img
                  src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
                  alt={WeatherData.weather[0].description}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          {WeatherData.name !== undefined ? (
            <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
              <div className="flex justify-between gap-x-8">
                <p>Feels like</p>
                <p className="font-bold w-20">
                  {Math.round(WeatherData.main.feels_like)}°C
                </p>
              </div>
              <div className="flex justify-between gap-x-8">
                <p>Humidity</p>
                <p className="font-bold w-20">
                  {Math.round(WeatherData.main.humidity)}%
                </p>
              </div>
              <div className="flex justify-between gap-x-8">
                <p>Wind speed</p>
                <p className="font-bold w-20">
                  {Math.round(WeatherData.wind.speed)} KPH
                </p>
              </div>
              <div className="flex justify-between gap-x-8">
                <p>Pressure</p>
                <p className="font-bold w-20">
                  {Math.round(WeatherData.main.pressure)} hPa
                </p>
              </div>
              <div className="flex justify-between gap-x-8">
                <p>latitude</p>
                <p className="font-bold w-20">
                  {Math.round(WeatherData.coord.lat)} lat
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <h1>No weather data available</h1>
        </div>
      )}
    </div>
  );
};

export default Weather;
