import React, { useEffect, useState } from 'react';
import './Accident2017.scss'

const Accident2017 = () => {
    const [accident2017Data, setAccident2017Data] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/accident-2017')
        .then(res => res.json())
        .then(res => setAccident2017Data(res[0].nb_accident))
    }, []);

    return (
        <div className="Accident-2017">
            <div className="title">
                Accident number in 2017
            </div>
            <div className="nb-accident">
                {accident2017Data}
            </div>
        </div>
    );
}

export default Accident2017;