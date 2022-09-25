import Headtable from "./Headtable";
import Forecast from "./Forecast";
import useApi from "./useApi";
import { useParams } from "react-router-dom";

const Weatherpage = () => {
    const apiKey = 'eb8135b3489d43c8bc6181728222509';
    const { location, days } = useParams();
    const urlBuilder = (location, days) => {
        return 'http://api.weatherapi.com/v1/forecast.json?key='+ apiKey
            + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no';
    }
    const {weather, isLoading, error} = useApi(urlBuilder(location, days))

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