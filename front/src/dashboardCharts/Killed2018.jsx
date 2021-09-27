import React, {useState, useEffect} from 'react';
import './Killed2018.scss';

const Killed2018 = () => {
    const [killed2018Data, setKilled2018Data] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed-2018')
        .then(res => res.json())
        .then(res => setKilled2018Data(res[0].killed))
    }, []);

    return (
        <div className="Killed-2018">
            <div className="title">
                Casualty killed in 2018
            </div>
            <div className="killed">
                {killed2018Data}
            </div>
        </div>
    );
};

export default Killed2018;