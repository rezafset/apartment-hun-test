import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import MyRentList from '../MyRentList/MyRentList';
import Sidebar from '../Sidebar/Sidebar';

const MyRent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [rent, setRent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/userRent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setRent(data))
    }, [])


    // useEffect(() => {
    //     fetch('http://localhost:7000/userRent')
    //         .then(response => response.json())
    //         .then(data => setRent(data))

    // }, [])

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashboardHeader title='My Rent List'></DashboardHeader>
                    <div className="pt-4" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                        <MyRentList rent={rent}></MyRentList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;