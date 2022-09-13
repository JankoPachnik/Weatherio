const Headtable = ({weather, tempFormatChange, getTempFormating, tempFormat}) => {
    return (
        <div className="weather-preview">
            <div className="header-card">
                <div className="head-block">
                    <h2>{weather.location.name}, {weather.location.region}</h2>
                    <img src={weather.current.condition.icon} alt='0'/>
                </div>
                <p id="endHeader">{weather.location.country}</p>
                <div className="lower-preview">
                    <div className="temp-block">
                        <h1>{getTempFormating()}</h1>
                        <button id="tempChange" onClick={tempFormatChange}>°{tempFormat}</button>
                    </div>
                    <div className="data-footer">
                        <p>{weather.location.localtime}</p>
                        <p>Condition: {weather.current.condition.text}</p>
                        <p><img src={require('../images/clouds.png')} alt="0"/> {weather.current.cloud}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headtable;