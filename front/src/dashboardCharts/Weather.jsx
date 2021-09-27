import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './Weather.scss';

const Weather = () => {
    const [weatherData, setWeatherData] = useState([])

    useEffect (() => {
        fetch("http://localhost:3000/api/dashboard/weather")
            .then(res => res.json())
            .then(res => setWeatherData(res))
    }, [])

    const integrateData = () => {
        const weatherCount = weatherData.map(weather => weather.weather_conditions_count);
        const weatherName = weatherData.map(weather => weather.weather_conditions);
        let dataWeather = {
            datasets: [{
                data: weatherCount,
                backgroundColor: ["#663530", "#354A66", "#A7B378", "#B36E66", "#547DB3", "#F23827", "#F205CB", "#050259", "yellow"],
            }],
            labels: weatherName
        }
        return dataWeather
    }

    return (
        <div className="Weather">
            <Pie data={() => integrateData()}/>
        </div>
    )
}

export default Weather;