import React, { useEffect, useState } from 'react';
import BookingList from '../BookingList/BookingList';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Booking = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/rent')
            .then(response => response.json())
            .then(data => setBooking(data))

    }, [])

    return (
        <div>
            <DashboardHeader title={'Booking List'}></DashboardHeader>
            <div className="pt-4" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                <BookingList booking={booking}></BookingList>
            </div>
        </div>
    );
};

export default Booking;