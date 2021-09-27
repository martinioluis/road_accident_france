import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './Killed.scss';

const Killed = () => {
    const [killedData, setKilledData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed')
            .then(res => res.json())
            .then(res => setKilledData(res))
    }, []);

    const integrateData = () => {
        const killed = killedData.map(killed => killed.killed_nb);
        const months = killedData.map(killed => killed.month);

        let dataKilled = {
            datasets: [{
                data: killed,
                backgroundColor: "#354A66",
            }], 
            labels: months,
        }
        return dataKilled;
    }

    const options = {
        legend: {
            display: false
        },
        responsive: true,
    }

    return (
        <div className="Killed">
            <Bar data={() => integrateData()} options={options}/>
        </div>
    )
}

export default Killed;