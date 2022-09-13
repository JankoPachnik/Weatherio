import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label} from 'recharts';
import moment from "moment";
const Forecast = ({weather}) => {
    return (
        <div className="weather-card">
            <div className="weather-preview" id="temp-table">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart width={900} height={300} data={weather.hour} margin={{ top: 15, right: 20, bottom: 20, left: 0 }}>
                        <Line type="monotone" dataKey="temp_c" stroke="#f1356d" />
                        <CartesianGrid stroke="#aaaaaa" strokeDasharray="3 3" />
                        <XAxis dataKey="time_epoch" tickFormatter={(tick) => moment(tick * 1000).format('HH:mm')}
                               label={{value: "Time of day", offset: -15, position: "insideBottom", fill: 'rgba(241, 53, 109, 0.7)', fontSize: 25}}
                        />
                        <YAxis label={{value: "Temperature", angle: -90, position: "insideLeft", offset: 11, fill: 'rgba(241, 53, 109, 0.7)', fontSize: 25}} />
                        <Tooltip
                            labelFormatter={value => moment(value * 1000).format('HH:mm')}
                            formatter={(value, name) => [value, "Temp"]}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Forecast;

