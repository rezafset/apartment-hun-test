import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import MyRentList from '../MyRentList/MyRentList';
import Sidebar from '../Sidebar/Sidebar';

const MyRent = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashboardHeader title='My Rent List'></DashboardHeader>
                    <div className="pt-4" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                        <MyRentList></MyRentList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;