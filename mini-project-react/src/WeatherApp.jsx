import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "city",
        temp: 12.33,
        tempMin: 45.67,
        tempMax: 55.66,
        humidity: 66.77,
        feelsLike: 88, 
        weather: "weather",
    });
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
};