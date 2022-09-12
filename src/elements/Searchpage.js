import { useState, useEffect } from 'react';
import Weathercard from "./Weathercard";

const Searchpage = () => {
    const [todayWeather, setWeather] = useState(
        {
            "location": {
                "name": "London",
                "region": "City of London, Greater London",
                "country": "United Kingdom",
                "lat": 51.52,
                "lon": -0.11,
                "tz_id": "Europe/London",
                "localtime_epoch": 1662924499,
                "localtime": "2022-09-11 20:28"
            },
            "current": {
                "last_updated_epoch": 1662923700,
                "last_updated": "2022-09-11 20:15",
                "temp_c": 19.0,
                "temp_f": 66.2,
                "is_day": 0,
                "condition": {
                    "text": "Clear",
                    "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                    "code": 1000
                },
                "wind_mph": 8.1,
                "wind_kph": 13.0,
                "wind_degree": 200,
                "wind_dir": "SSW",
                "pressure_mb": 1015.0,
                "pressure_in": 29.97,
                "precip_mm": 0.0,
                "precip_in": 0.0,
                "humidity": 73,
                "cloud": 0,
                "feelslike_c": 19.0,
                "feelslike_f": 66.2,
                "vis_km": 10.0,
                "vis_miles": 6.0,
                "uv": 5.0,
                "gust_mph": 6.9,
                "gust_kph": 11.2
            }
        });

    // odpalando co render
    useEffect(() => {
        console.log('run');
    });

    return (
        <div className="home">
            <form className="search-box">
                <input type="text" id="search" placeholder="What City are you interested in?" required/>
                <img src={require('../weather_icon.png')} alt="0"/>
                <input type="submit" value="Show me" id="submit"/>
            </form>

            <div className="card-shower">
                <Weathercard todayWeather={todayWeather}/>
            </div>

        </div>
    );
}

export default Searchpage;