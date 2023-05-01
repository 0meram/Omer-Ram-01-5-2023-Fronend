import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

function CurrentWeather(props) {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        axios
            .get(`/current/${props.cityKey}`)
            .then((response) => {
                setCurrentWeather(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.cityKey]);

    return (
        <div className="CurrentWeather">
            current wether
            {currentWeather ? (
                <div>
                    <h2>{currentWeather.LocalizedName}, {currentWeather.Country.LocalizedName}</h2>
                    <p>{currentWeather.Temperature.Metric.Value}°C, {currentWeather.WeatherText}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
export default CurrentWeather;
