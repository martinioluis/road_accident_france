import React from 'react';
import Weather from './../dashboardCharts/Weather';
import Killed from './../dashboardCharts/Killed';
import './Map.scss'
import KilledMap from './../dashboardCharts/KilledMap';

const Map = () => {
    return (
        <div className="Map">
            <h2>Map data</h2>
            <div className="weather-section">
                <p>
                    Warning: This slide is a preview of what we can do with the data.

                    It can also be seen on the pie chart that most accidents occur during normal weather conditions. However, 10% of road accidents occur during light rains.
                </p>
                <Weather />
            </div>
            <div className="killed-section">
            <p>We notice that the the number of deaths is very accentuated during the summer. Indeed, the summer vacation periods experience a strong increase in road traffic.</p>
                <Killed />
            </div>
            <div className="map-section">
            <p>
                This map show the number of deaths in road accidents in 2017 on roads for which the law had to be enforced (national and departmental roads). Of course, it is possible to do the same thing for the previous years.

                For better readability on the map, i suggest you filter the data by clicking on one of the graphs on the left. It is then possible to filter the data by month (bar chart) or by weather conditions (pie chart).</p>
                <KilledMap/>
            </div>
        </div>
    )
}

export default Map;