import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import Navigation from '../Shared/Navigation/Navigation';
import AptImgGallery from './AptImgGallery/AptImgGallery';
import RentRequestForm from './RentRequestForm/RentRequestForm';
import classes from './apartmentDetails.module.css';
import { useParams } from 'react-router-dom';


const ApartmentDetails = (props) => {

    const [aptInfo, setAptInfo] = useState({});
    const aptId = useParams();
    console.log('Apartment ID from route parameter:', aptId.id)
    useEffect( () => {
        fetch(`https://agile-taiga-86357.herokuapp.com/apartmentDetails/${aptId.id}`)
        .then( res => res.json())
        .then( data => {
            const selectedApt = {...data}
            setAptInfo(selectedApt);
            console.log(selectedApt);
            console.log(aptInfo);
        })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner bannerContent="Apartment"></Banner>
            <Container>
                <div className={classes.ApartmentDetailsContainer}>
                    <Row>
                        <Col md={8}>
                            <AptImgGallery></AptImgGallery>
                            <div className={classes.aptDetails}>
                                <div className="apartmentHead">
                                    <div className={classes.aptNameNPrice}>
                                        <div className={classes.aptName}>
                                        <h3>{aptInfo.title}</h3>
                                        </div>
                                        <div className={classes.aptPrice} style={{"color": "#275A53", "textAlign":"right"}}>
                                            <h3>${aptInfo.price}</h3>
                                        </div>
                                    </div>
                                    <div className="aptIntro">
                                    <p>3000 sq-ft., {aptInfo.bedroom} Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                                    </div>
                                </div>
                                <div className={classes.priceDetail}>
                                    <h4>Price Details-</h4>
                                    <p>Rent/Month: $550 (negotiable)</p>
                                    <p>Service Charge : 8,000/= Tk per month, subject to change</p>
                                    <p>Security Deposit : 3 month’s rent</p>
                                    <p>Flat Release Policy : 3 months earlier notice required</p>
                                </div>
                                <div className="propertyDetails">
                                <h4>Property Details-</h4>
                                <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <RentRequestForm aptInfo={aptInfo}></RentRequestForm>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ApartmentDetails;