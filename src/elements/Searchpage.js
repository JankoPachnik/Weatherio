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
    const apiKey = 'eb8135b3489d43c8bc6181728222509';
    const urlBuilder = () => {
        return 'http://api.weatherapi.com/v1/timezone.json?key='+ apiKey
            + '&q=' + 'London';
    }
    const {error} = useApi(urlBuilder())

    return (
        <div className="home">
            <form className="search-box" onSubmit={handleSubmit}>
                <input type="text" id="searchField" placeholder="What City are you interested in?" required
                       onChange={(e) => setLocation(e.target.value)}/>
                <p>Days ahead:</p>
                <select value={dayNumber} onChange={(e) => setDayNumber(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
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