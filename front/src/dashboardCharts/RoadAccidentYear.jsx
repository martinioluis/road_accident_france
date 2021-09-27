import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import './RoadAccidentYear.scss';

const RoadAccidentYear = () => {
    const [roadAccidentYearData, setRoadAccidentYearData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/dashboard/")
            .then(res => res.json())
            .then(res => setRoadAccidentYearData(res))
            .catch(err => console.log(err))
    }, []);


    const integrateData = () => {
        const accidents = roadAccidentYearData.map(item => item.total_accident)
        const year = roadAccidentYearData.map(year => year.year)

        let dataAccident = {
            datasets: [{
            data: accidents,
            backgroundColor: '#354A66',
            }],
            labels: year,
        }
        return dataAccident;
    }

    const options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Road accident by Year',
        },
        maintainAspectRatio: false,
        aspectRatio: 1,
        responsive: true,

    }

    return (
        <div className="RoadAccidentYear">
            <Bar data={() => integrateData()} options={options}/>
        </div>
    )
}

export default RoadAccidentYear;