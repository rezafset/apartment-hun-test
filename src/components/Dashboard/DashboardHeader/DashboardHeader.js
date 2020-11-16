import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = (props) => {
    return (
        <div className="dashboard font-weight-bold d-flex justify-content-between align-items-center">
            <h3 className="pl-5">{props.title}</h3>
        </div>
    );
};

export default DashboardHeader;