import Smallcard from "./Smallcard";

const DetailsTable = ({weather}) => {
    return (
        <div className="weather-card">
            <div className="weather-preview" id="detail-card">
                <Smallcard title="Pressure" icon={<img src={require('../images/pressure.png')} alt="0"/>} data={weather.current.pressure_mb+" MB"}/>
                <Smallcard title="Wind" icon={<img src={require('../images/wind.png')} alt="0"/>} data={weather.current.wind_kph+" km/h"}/>
                <Smallcard title="Humidity" icon={<img src={require('../images/humidity.png')} alt="0"/>} data={weather.current.humidity+" %"}/>
                <Smallcard title="Visibility" icon={<img src={require('../images/visibility.png')} alt="0"/>} data={weather.current.vis_km+" km"}/>
            </div>
        </div>
    );
}

export default DetailsTable;