import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./component/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");
  const [error, setError] = useState(""); // Add state for error message
  const API_KEY = "440f129425ba215083ee9bc5a1255b72";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = (event) => {
    console.log(url);
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setError("");
          // console.log(response.data);
        })
        .catch((error) => {
          setError("Location not found. Please try again.");
          setData({});
        });
      setlocation("");
    }
  };

  return (
    <>
      <div className="w-full h-full relative bg-cyan-600">
        <div className="text-center p-4">
          <input
            type="text"
            className="py-4 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
            placeholder="Enter your location"
            value={location}
            onChange={(event) => setlocation(event.target.value)}
            onKeyDown={searchLocation}
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}{" "}
        <Weather WeatherData={data} />
      </div>
    </>
  );
}

export default App;
