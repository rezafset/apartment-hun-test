import React, { useContext, useEffect, useState } from 'react';
import classes from './rentRequestForm.module.css';
import { UserContext } from '../../../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

toast.configure();

const RentRequestForm = (props) => {
    const history = useHistory();

    console.log(`props from rent request form`, props.aptInfo)
    const [bookingInfo, setBookingInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    // Handle Blur
    const handleBlur = e => {
        const bookingData = {...bookingInfo};
        bookingData.email = loggedInUser.email;
        bookingData.status = "pending";
        bookingData.title = props.aptInfo.title;
        bookingData.price = props.aptInfo.price;
        bookingData.location = props.aptInfo.location;
        bookingData.aptId = props.aptInfo._id;
        bookingData[e.target.name] = e.target.value;
        setBookingInfo(bookingData);
        console.log(bookingInfo);
    }

    const handleBookingRequest = (e) => {
        fetch('http://localhost:7000/requestBooking', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(bookingInfo)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data){
                // alert('Rent added Successfully');
                toast.success('Rent Added Successfully');
                history.push('/dashboard/myRent');
            }
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault();
    }

    return (
        <div className={classes.requestFormContainer}>
            <input placeholder="Full Name" name="name" onBlur={handleBlur} type="text" required />
            <br/>
            <input placeholder="Phone No." name="phone" onBlur={handleBlur} type="phone" required />
            <br/>
            <input placeholder="Email ID" name="email" onBlur={handleBlur} type="email"  value={loggedInUser.email} required/>
            <br/>
            <input placeholder="Message" name="message" onBlur={handleBlur}  type="text" style={{"height": "200px"}} required/>
            <br/>
            <button onClick={handleBookingRequest} className={classes.bookingBtn} >Request Booking</button>
        </div>
    );
};

export default RentRequestForm;