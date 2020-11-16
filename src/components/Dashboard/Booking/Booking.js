import React from 'react';
import BookingList from '../BookingList/BookingList';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Booking = () => {
    return (
        <div>
            <DashboardHeader title={'Booking List'}></DashboardHeader>
            <div className="pt-4" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                <BookingList></BookingList>
            </div>
        </div>
    );
};

export default Booking;