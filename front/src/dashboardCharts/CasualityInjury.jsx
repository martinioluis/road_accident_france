import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './CasualityInjury.scss';

const CasualityInjury = () => {
    const [casualityInjury17, setCasualityInjury17] = useState([]);
    const [casualityInjury18, setCasualityInjury18] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/casuality-injury-17')
        .then(res => res.json())
        .then(res => setCasualityInjury17(res))
    }, []);


    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/casuality-injury-18')
        .then(res => res.json())
        .then(res => setCasualityInjury18(res))
    }, []);

    const integrateData = () => {
        const casualityInjury2017 = casualityInjury17.map(casuality => casuality.minor);
        const casualityInjury2018 = casualityInjury18.map(casuality => casuality.minor);
        const month = casualityInjury17.map(month => month.month);

        let dataAccident = {
            datasets: [
                {
                    label: 'casuality injury 2017',
                    fillColor:'red',
                    data: casualityInjury2017,
                    type: 'line',
                    backgroundColor: "#663530",
                },
                {
                    label: 'casuality injury 2018',
                    fillColor:'blue',
                    data: casualityInjury2018,
                    type: 'line',
                    backgroundColor: "#354A66",
                }
            ], 
            labels: month,
        }
        return dataAccident;
    }

    return (
        <div className="CasualityInjury">
            <Bar data={() => integrateData()}/>
        </div>
    );
};

export default CasualityInjury;