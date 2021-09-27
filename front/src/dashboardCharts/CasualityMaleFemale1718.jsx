import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import './CasualityMaleFemale1718.scss';

const CasualityMaleFemale1718 = () => {
    const [casualityMF17Data, setCasualityMF17Data] = useState([]);
    const [casualityMF18Data, setCasualityMF18Data] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/male-female-month-17')
        .then(res => res.json())
        .then(res => setCasualityMF17Data(res))
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/male-female-month-18')
        .then(res => res.json())
        .then(res => setCasualityMF18Data(res))
    }, []);

    const integrateData = () => {
        const male17 = casualityMF17Data.map(male17 => male17.casuality_male);
        const female17 = casualityMF17Data.map(female17 => female17.casuality_female);
        const male18 = casualityMF18Data.map(male18=> male18.casuality_male);
        const female18 = casualityMF18Data.map(female18 => female18.casuality_female);
        const months = casualityMF17Data.map(month => month.month)

        let data = {
            datasets: [
                {
                    label: 'casuality male 2017',
                    data: male17,
                    backgroundColor: "#663530",
                },
                {
                    label: 'casuality male 2018',
                    data: male18,
                    backgroundColor: "#354A66",
                },
                {
                    label: 'casuality female 2017',
                    data: female17,
                    type: 'line',
                    backgroundColor: "#547DB3",
                },
                {
                    label: 'casuality female 2018',
                    data: female18,
                    type: 'line',
                },
            ], 
            labels: months,
        }
        return data;
    };

    return (
        <div className="CasualityMaleFemale1718">
            <Bar data={() => integrateData()}/>
        </div>
    )
}

export default CasualityMaleFemale1718;