import React, { useEffect, useState } from 'react';
import './Accident2018.scss';

const Accident2018 = () => {
    const [accident2018Data, setAccident2018Data] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/accident-2018')
        .then(res => res.json())
        .then(res => setAccident2018Data(res[0].nb_accident))
    }, []);

    return (
        <div className="Accident-2018">
            <div className="title">
                Accident number in 2018
            </div>
            <div className="nb-accident">
                {accident2018Data}
            </div>
        </div>
    );
}

export default Accident2018;