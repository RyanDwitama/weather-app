import React from "react";
import clear from "../assets/clear.png"
import mist from "../assets/mist.png"
import few_clouds from "../assets/few_clouds.png"
import rain from "../assets/rain.png"
import scattered_clouds from "../assets/scattered_clouds.png"
import snow from "../assets/snow.png"
import thunderstorm from "../assets/thunderstorm.png"
import magnifying from "../assets/magnifying.png"
import question from "../assets/question.png"

const WeatherCard: React.FC<{ weatherData: any, cityName: string, handleCityName: (cityName: string) => void, changeCityName: (newCity: string) => void, newCityName: string }> = ({ weatherData, cityName, handleCityName, changeCityName, newCityName }) => {
    const weatherPicker: { [key: string]: string } = {
        Clouds: scattered_clouds,
        Rain: rain,
        Clear: clear,
        Mist: mist,
        "Few Clouds": few_clouds,
        Snow: snow,
        Thunderstorm: thunderstorm,
        Question: question
    }

    return (
        <div className="border-2 p-5 bg-purple-200 rounded-lg shadow-2xl w-[600px] h-[500px] relative">
            {weatherData ? (
                <div key={weatherData.id} className="text-center">
                    <img src={weatherPicker[weatherData.weather[0].main]} alt={weatherData.weather[0].description} className="w-[100px] mx-auto" />
                    {weatherData.main.temp.toFixed(0)}<sup>o</sup>Celcius

                    <div className="flex flex-row justify-center items-center gap-2 my-15">
                        <input type="text" placeholder="Search other country..." className="border-1 p-2 rounded-full" onChange={e => handleCityName(e.target.value)} value={cityName} />
                        <button onClick={() => changeCityName(cityName)}><img src={magnifying} alt="magnifying" className="w-12 ml-[-1px] border-1 rounded-full p-3"/></button>
                    </div>
                    {newCityName.slice(0, 1).toUpperCase() + newCityName.slice(1).toLowerCase()}

                    <div className="flex flex-column justify-between">
                        <span className="absolute bottom-5 right-5 sm:text-[20px] text-[10px]">Max: {weatherData.main.temp_max.toFixed(0)}<sup>o</sup>C</span>
                        <span className="absolute bottom-5 left-7 sm:text-[20px] text-[10px]">Min: {weatherData.main.temp_min.toFixed(0)}<sup>o</sup>C</span>
                    </div>
                </div>
            ) : (
                <React.Fragment>Loading...</React.Fragment>
            )}
        </div>
    )
}

export default WeatherCard