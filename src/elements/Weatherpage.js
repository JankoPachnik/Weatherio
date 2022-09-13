import Headtable from "./Headtable";
import Forecast from "./Forecast";
import useApi from "./useApi";
import { useParams } from "react-router-dom";

const Weatherpage = () => {
    const apiKey = '3fecf2b7a1d4445f9eb191439221109';
    const { location } = useParams();
    const urlBuilder = (location, days) => {
        return 'http://api.weatherapi.com/v1/forecast.json?key=3fecf2b7a1d4445f9eb191439221109'
            + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no';
    }
    const {weather, isLoading, error} = useApi(urlBuilder(location, 5))

    return (
        <div className="card-shower">
            {error && <div>{ error }</div>}
            {isLoading && <div id="loading-div">Loading... </div>}
            {weather &&
                <div>
                    <Headtable weather={weather}/>
                    {
                        weather.forecast.forecastday.map(day =>
                            <Forecast weather={day}/>
                        )
                    }
                </div>
            }
        </div>
    );
}

export default Weatherpage;