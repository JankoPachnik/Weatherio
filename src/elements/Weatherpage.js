import { useState} from "react";
import DetailsTable from "./Detailstable";
import Headtable from "./Headtable";
import Forecast from "./Forecast";

const Weatherpage = ({weather}) => {
    const [tempFormat, setTempFormat] = useState('C');
    const [tempValue, setTempValue] = useState(weather.current.temp_c);

    const tempFormatChange = () => {
        if( tempFormat === 'C'){
            setTempFormat('F');
            setTempValue(weather.current.temp_f)
        }else if (tempFormat === 'F'){
            setTempFormat('C');
            setTempValue(weather.current.temp_c);
        }
    }

    const getTempFormating = () => {
        return tempValue +' °' + tempFormat;
    }

    return (
        <div>
            <Headtable weather={weather} tempFormatChange={tempFormatChange} getTempFormating={getTempFormating} tempFormat={tempFormat}/>
            <DetailsTable weather={weather}/>
            <Forecast weather={weather.forecast.forecastday[0]}/>
        </div>
    );
}

export default Weatherpage;