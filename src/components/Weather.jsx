//Weather.jsx
import React, { useEffect } from "react";
import "../styles/App.css";
const WeatherComponent = () => {

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ee11567202766ed1b15e51654dcbf58e`
            );
            const data = await res.json();
            const temperature = data.main.temp;
            const icon = data.weather[0].icon;
            document.getElementById("temp").innerHTML =
              temperature.toFixed(1) + "ºC";
            const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
            const iconElement = document.createElement("img");
            iconElement.src = iconURL;
            const iconWeatherDiv = document.getElementById("iconWeather");
            if (iconWeatherDiv.children.length === 0) {
              iconWeatherDiv.appendChild(iconElement);
            }
            console.log(data);
          } catch (error) {
            console.log("Error calling API:", error);
          }
        });
      } else {
        console.log("Geolocalización no es soportada por este navegador.");
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <p id="temp"></p>
      <div id="iconWeather"></div>
    </div>
  );
};

export default WeatherComponent;
