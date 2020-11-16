import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import './Apartment.css';
import apartment1 from '../../../resources/images/apartment1.png'

const Apartment = () => {
    return (
        <div id="apartment">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card apartment-info">
                            <img className="card-img-top" src={apartment1} alt="" />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold" style={{ color: '#275A53' }}> Washington Avenue</h5>
                                <p className="text-secondary"><FontAwesomeIcon icon={faMapMarker} className="mr-1" />Nasirabad H/S, Chattogram</p>
                                <div className="d-flex justify-content-between">
                                    <p className="text-secondary"><FontAwesomeIcon icon={faBed} className="mr-1" />3 Bedrooms</p>
                                    <p className="text-secondary"><FontAwesomeIcon icon={faBath} className="mr-1" />3 Bathrooms</p>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <h3 className="font-weight-bold" style={{ color: '#275A53' }}>$194</h3>
                                <button className="btn" style={{ background: '#275A53', color: '#ffffff' }}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;