import React from 'react';
import './Dashboard.scss';
import Introduction from './dashboardComponents/Introduction';
import Map from './dashboardComponents/Map';
import Comparison from './dashboardComponents/Comparison';
import Conclusion from './dashboardComponents/Conclusion';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Introduction />
            <Map />
            <Comparison />
            <Conclusion />
        </div>
    )
}

export default Dashboard;