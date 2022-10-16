import {useState} from "react";
import {Link} from "react-router-dom";
import useApi from "./useApi";
import Newstable from "./Newstable";

const Searchpage = () => {
    const [location, setLocation] = useState('');
    const [dayNumber, setDayNumber] = useState(0);
    const handleSubmit = (e) =>{
        e.preventDefault();
        }
    const urlBuilder = () => {
        return 'https://api.weatherapi.com/v1/timezone.json?key='+ process.env.REACT_APP_API_KEY
            + '&q=' + 'London';
    }
    const {error} = useApi(urlBuilder())
    const numberDaysOption = (days) =>{
        const keys = [...Array(days).keys()]
        return(
            keys.map((item) => (
                <option value={item+1}>{item+1}</option>
            ))
        );
    }
    return (
        <div className="home">
            <form className="search-box" onSubmit={handleSubmit}>
                <input type="text" id="searchField" placeholder="What City are you interested in?" required
                       onChange={(e) => setLocation(e.target.value)}/>
                <p>Days ahead:</p>
                <select value={dayNumber} onChange={(e) => setDayNumber(e.target.value)}>
                    {numberDaysOption(7)}
                </select>
                <img src={require('../images/weather_icon.png')} alt="0"/>
                <Link to={`/results/${location}/${dayNumber}`}>
                    <button type="submit" id="submit">Show Me</button>
                </Link>
            </form>
            <div id="alert-header">
                <div className="weather-preview" id="weather-alert">
                    <h2>Weather Alerts:</h2>
                </div>
                <div id="status-div">
                    <div className="weather-preview" id="lower-status">
                        <h2>Status:</h2>
                        {error && <h2 id="offline-Status">Offline</h2>}
                        {!error && <h2 id="online-Status">Online</h2>}
                    </div>
                </div>
            </div>
            <Newstable />
        </div>
    );
}

export default Searchpage;