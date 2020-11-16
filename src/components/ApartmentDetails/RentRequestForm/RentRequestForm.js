import React, { useState } from 'react';
import classes from './rentRequestForm.module.css';

const RentRequestForm = () => {
    const [bookingInfo, setBookingInfo] = useState({});

    // Handle Blur
    const handleBlur = e => {
        const bookingData = {...bookingInfo};
        bookingData[e.target.name] = e.target.value;
        setBookingInfo(bookingData);
        console.log(bookingInfo);
    }
    return (
        <div className={classes.requestFormContainer}>
            <input placeholder="Full Name" name="name" onBlur={handleBlur} type="text"/>
            <br/>
            <input placeholder="Phone No." name="phone" onBlur={handleBlur} type="phone"/>
            <br/>
            <input placeholder="Email ID" name="email" onBlur={handleBlur} type="email"/>
            <br/>
            <input placeholder="Message" name="message" onBlur={handleBlur}  type="text" style={{"height": "200px"}}/>
            <br/>
            <button className={classes.bookingBtn}>Request Booking</button>
        </div>
    );
};

export default RentRequestForm;