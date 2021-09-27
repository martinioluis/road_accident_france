import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './Killed1718Month.scss';

const Killed1718Month = () => {
    const [killed2017, setKilled2017] = useState([]);
    const [killed2018, setKilled2018] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed-2017-month')
        .then(res => res.json())
        .then(res => setKilled2017(res))
    }, []);


    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed-2018-month')
        .then(res => res.json())
        .then(res => setKilled2018(res))
    }, []);

    const integrateData = () => {
        const killed17 = killed2017.map(killed => killed.killed);
        const killed18 = killed2018.map(killed => killed.killed);
        const month = killed2017.map(month => month.month);

        let dataAccident = {
            datasets: [
                {
                    label: 'killed 2017',
                    fillColor:'red',
                    data: killed17,
                    backgroundColor: "#663530",
                },
                {
                    label: 'killed 2018',
                    fillColor:'blue',
                    data: killed18,
                    backgroundColor: "#354A66",
                }
            ], 
            labels: month,
        }
        return dataAccident;
    }

    return (
        <div className="Killed1718Month">
            <Bar data={() => integrateData()}/>
        </div>
    );
};

export default Killed1718Month;