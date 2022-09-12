import { useState} from "react";

const Weathercard = ({todayWeather}) => {
    const [tempFormat, setTempFormat] = useState('C');
    const [tempValue, setTempValue] = useState(todayWeather.current.temp_c);

    const tempFormatChange = () => {
        if( tempFormat === 'C'){
            setTempFormat('F');
            setTempValue(todayWeather.current.temp_f)
        }else if (tempFormat === 'F'){
            setTempFormat('C');
            setTempValue(todayWeather.current.temp_c);
        }
    }

    const getTempFormating = () => {
        return tempValue +' °' + tempFormat;
    }

    return (
        <div className="weather-card">
            <div className="weather-preview">
                <div className="headBlock">
                    <h2>{todayWeather.location.name}, {todayWeather.location.region}</h2>
                    <img src={todayWeather.current.condition.icon} alt='0'/>
                </div>
                <p id="endHeader">{todayWeather.location.country}</p>
                <div className="lower-preview">
                    <div className="temp-block">
                        <h1>{getTempFormating()}</h1>
                        <button id="tempChange" onClick={tempFormatChange}>Format</button>
                    </div>
                    <div className="data-footer">
                        <p>{todayWeather.location.localtime}</p>
                        <p>Condition: {todayWeather.current.condition.text}</p>
                        <p><img src={require('../clouds.png')} alt="0"/> {todayWeather.current.cloud}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weathercard;