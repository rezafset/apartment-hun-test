import React, { useEffect, useState } from 'react';
import BookingList from '../BookingList/BookingList';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Booking = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://agile-taiga-86357.herokuapp.com/rent')
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