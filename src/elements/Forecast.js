import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import moment from "moment";
import DetailsTable from "./Detailstable";
import Forecastdetails from "./Forecastdetails";
const Forecast = ({weather}) => {
    return (
        <div className="weather-card">
            <div className="weather-preview" id="temp-table">
                <div className="table-header">
                    <h2>{weather.date}</h2>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart width={900} height={300} data={weather.hour} margin={{ top: 15, right: 20, bottom: 20, left: 0 }}>
                        <Line type="monotone" dataKey="temp_c" stroke="#f1356d" />
                        <CartesianGrid stroke="#aaaaaa" strokeDasharray="3 3" />
                        <XAxis dataKey="time_epoch" tickFormatter={(tick) => moment(tick * 1000).format('HH:mm')}
                               label={{value: "Time of day", offset: -15, position: "insideBottom", fill: 'rgba(241, 53, 109, 0.7)', fontSize: 25, fontStyle: "italic"}}
                        />
                        <YAxis label={{value: "Temperature", angle: -90, position: "insideLeft", offset: 11, fill: 'rgba(241, 53, 109, 0.7)', fontSize: 25, fontStyle: "italic"}} />
                        <Tooltip
                            labelFormatter={value => moment(value * 1000).format('HH:mm')}
                            formatter={(value, name) => [value, "Temp"]}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <div>
                    <Forecastdetails weather={weather.day}/>
                </div>
            </div>
        </div>
    );
}

export default Forecast;

