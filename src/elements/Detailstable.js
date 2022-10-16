import Smallcard from "./components/Smallcard";

const DetailsTable = ({weather}) => {
    return (
        <div className="detail-row" id="detail-card">
            <Smallcard title="Pressure" icon={<img className="invert-image" src={require('../images/pressure.png')} alt="0"/>} data={weather.current.pressure_mb+" MB"}/>
            <div>|</div>
            <Smallcard title="Wind" icon={<img className="invert-image" src={require('../images/wind.png')} alt="0"/>} data={weather.current.wind_kph+" km/h"}/>
            <div>|</div>
            <Smallcard title="Humidity" icon={<img className="invert-image" src={require('../images/humidity.png')} alt="0"/>} data={weather.current.humidity+" %"}/>
            <div>|</div>
            <Smallcard title="Visibility" icon={<img className="invert-image" src={require('../images/visibility.png')} alt="0"/>} data={weather.current.vis_km+" km"}/>
        </div>
    );
}

export default DetailsTable;