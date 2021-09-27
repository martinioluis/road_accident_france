import React, {useState, useEffect} from 'react';
import './Killed2017.scss';

const Killed2017 = () => {
    const [killed2017Data, setKilled2017Data] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/dashboard/killed-2017')
        .then(res => res.json())
        .then(res => setKilled2017Data(res[0].killed))
    }, []);

    return (
        <div className="Killed-2017">
            <div className="title">
                Casualty killed in 2017
            </div>
            <div className="killed">
                {killed2017Data}
            </div>
        </div>
    );
};

export default Killed2017;