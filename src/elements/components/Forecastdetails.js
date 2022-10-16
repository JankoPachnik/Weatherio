const Forecastdetails = ({weather}) => {
    return (
        <div className="detail-row">
            <div className="small-cards">
                <h5>Avg temp: </h5>
                <p>{weather.avgtemp_c}</p>
            </div>
            <div>|</div>
            <div className="small-cards">
                <h5>Avg Humidity:</h5>
                <p>{weather.avghumidity}</p>
            </div>
            <div>|</div>
            <div className="small-cards">
                <p>{weather.condition.text}</p>
            </div>
            <div>|</div>
            <div className="small-cards">
                <p><img className="forecast-image" src={weather.condition.icon} alt='0'/></p>
            </div>
        </div>
    );
}

export default Forecastdetails;