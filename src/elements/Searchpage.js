import {useState} from "react";
import {Link} from "react-router-dom";

const Searchpage = () => {
    const [location, setLocation] = useState('');
    const [dayNumber, setDayNumber] = useState(0);
    const handleSubmit = (e) =>{
        e.preventDefault();
        }

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
        </div>
    );
}

export default Searchpage;