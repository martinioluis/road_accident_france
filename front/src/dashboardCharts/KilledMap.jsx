import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Circle, Popup } from 'react-leaflet';
import palx from 'palx';
import './KilledMap.scss';

const KilledMap = () => {
    const [killedMapData, setKilledMapData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed-map')
            .then(res => res.json())
            .then(res => setKilledMapData(res))
    }, []);

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    // max killed for knowing the nb of color choosing -> here is 6
    const maxKilled = () => {
        const nbKilled = killedMapData.map(killed => killed.casualty_severity_killed);
        return nbKilled.filter(onlyUnique);
    }

    const chooseColor = casuality_killed => {
        // generate palette colors cyan with max nb killed
        const colors = palx('cyan').cyan.splice(0, maxKilled().length);
        let color = '';

        switch(casuality_killed) {
            case 1: 
                color = colors[0];
                break;
            case 2:
                color = colors[1];
                break;
            case 3:
                color = colors[2];
                break;
            case 4:
                color = colors[3];
                break;
            case 5:
                color = colors[4];
                break;
            case 6:
                color = colors[5];
                break;
            default:
                console.log("error");
                break;
        }
        return color;
    }

    return (
        <Map center={[46.252286, 2.123799]} zoom={5}>
            <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {killedMapData ?
                killedMapData.map(point => 
                    <Circle center={[point.latitude, point.longitude]} key={point.Num_Acc} color="#354A66" radius={20}>
                        <Popup>
                            <ul>
                                <li>
                                    date: {point.date}
                                </li>
                                <li>
                                    weather conditions: {point.weather_conditions}
                                </li>
                                <li>
                                    killed: {point.killed}
                                </li>
                                <li>
                                    male: {point.casuality_male}
                                </li>
                                <li>
                                    female: {point.casuality_female}
                                </li>
                                <li>
                                    nb vehicles: {point.vehicles_nb}
                                </li>
                            </ul>
                        </Popup>
                    </Circle>
                )
                :   "Loading"
            }
        </Map>
    )
}

export default KilledMap;