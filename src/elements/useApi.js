import { useState, useEffect } from 'react';

const useApi = (url) => {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Your request didnt work');
                }
                return res.json()
            })
            .then((data) =>{
                setWeather(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            })
    }, [url]);
    console.log(weather);
    return {weather, isLoading, error}
}

export default useApi;