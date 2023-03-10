const API_KEY = "25703ec2a3c172163a869752a03ba072"

const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units${units}`
    
    const data = await fetch(URL)
    .then ((res) => res.json())
    .then((data) => data);

    console.log(data);

}


export {getFormattedWeatherData} ;