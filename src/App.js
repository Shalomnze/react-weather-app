import React, { useEffect, useState } from "react";
import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import Description from "./components/Description";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  
  const [weather, setWeather] = useState (null);

  useEffect(() => {
    const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData("paris");
    setWeather(data);
    
    };
    fetchWeatherData();
  }, [])
  
  return (
    <div className="app" style={{backgroundImage: `url(${cold})`}}>
      
      <div className="overlay">
        {
          weather && (

            <div className="container">
              {/* container will render if weather isnt null */}
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
               <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weather icon" />
                <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
            <h1>{weather.temp.toFixed()} °C </h1>
            </div>
          </div>

          {/* bottom description */}
        <Description />
        </div>
            
          )
        }
        

      </div>


    </div>
  );
}

export default App;
