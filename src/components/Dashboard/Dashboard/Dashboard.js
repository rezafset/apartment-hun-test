import React from 'react';
import Booking from '../Booking/Booking';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div id="dashboard">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <Booking></Booking>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;