import {useState} from "react";
import {Link, Navigate} from "react-router-dom";

const Searchpage = () => {
    const [location, setLocation] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(location);
        return <Navigate to={`/results/${location}`}/>
        }

    return (
        <div className="home">
            <form className="search-box" onSubmit={handleSubmit}>
                <input type="text" id="searchField" placeholder="What City are you interested in?" required
                       onChange={(e) => setLocation(e.target.value)}/>
                <img src={require('../images/weather_icon.png')} alt="0"/>
                <Link to={`/results/${location}`}>
                    <button type="submit" id="submit">Show Me</button>
                </Link>
            </form>
            <div className="panorama-holder">
                <img id="panorama" src={require('../images/panorama.jpg')} alt="0"/>
            </div>
        </div>
    );
}

export default Searchpage;