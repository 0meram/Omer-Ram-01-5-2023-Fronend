import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

function CurrentWeather(props) {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/currentWeather?cityKey=${props.cityKey}`)
            .then((response) => {
                setCurrentWeather(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.cityKey]);

    return (
        <div className="CurrentWeather">
            {currentWeather ? (
                <div>
                    <h1>{currentWeather.temperature}°C</h1>
                    <h2>{currentWeather.weather_text}</h2>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
export default CurrentWeather;
