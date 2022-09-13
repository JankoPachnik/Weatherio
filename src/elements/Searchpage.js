import { useState, useEffect } from 'react';
import Weatherpage from "./Weatherpage";
import useApi from "./useApi";

const Searchpage = () => {
    const {weather, isLoading, error} = useApi('http://localhost:8000/data');

    return (
        <div className="home">
            <form className="search-box">
                <input type="text" id="search" placeholder="What City are you interested in?" required/>
                <img src={require('../images/weather_icon.png')} alt="0"/>
                <input type="submit" value="Show me" id="submit"/>
            </form>
            <div className="card-shower">
                {error && <div>{ error }</div>}
                {isLoading && <div>Loading</div>}
                {weather && <Weatherpage weather={weather}/>}
            </div>
        </div>
    );
}

export default Searchpage;