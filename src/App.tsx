import React, { useEffect, useState } from "react"
import WeatherCard from "./components/weather-card";

const WeatherApp: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [cityName, setCityName] = useState("");
    const [newCityName, setNewCityName] = useState("Indonesia");
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
    
    const fetchingData = async() => {
        try {
            const response = await fetch(BASE_URL);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                const data: any  = {
                    id: "404",
                    weather: [{
                        main: "Question",
                        description: "Error country input"
                    }],
                    main: {
                        temp: 0,
                        temp_max: 0,
                        temp_min: 0
                    }
                }
                setWeatherData(data);
                setNewCityName("Invalid country");
            }
        } catch (error) {
            console.error("Something went wrong:", error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, [newCityName]);

    const changeCityName = (newCity: string): void => {
        setNewCityName(newCity);
    }

    return (
        <div className="flex flex-row justify-center items-center h-[100vh]">
            <WeatherCard weatherData={weatherData} cityName={cityName} handleCityName={setCityName} changeCityName={changeCityName} newCityName={newCityName} />
        </div>
    )
}

export default WeatherApp;