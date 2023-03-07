import React from "react";
import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import Description from "./components/Description";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${cold})`}}>
      
      <div className="overlay">

        <div className="container">

          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
               <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
                <h3>london, GB</h3>
                <img src="#" alt="weather icon" />
                <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>

          {/* bottom description */}
        <Description />
        </div>

      </div>


    </div>
  );
}

export default App;
