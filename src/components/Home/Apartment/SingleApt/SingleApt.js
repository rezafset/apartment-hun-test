import React from 'react';
import '../Apartment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleApt = ({ apartment }) => {

    return (
        <div className="card apartment-info mt-3">
            <img className="card-img-top" src={`data:image/png;base64,${apartment.image.img}`} alt="" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold" style={{ color: '#275A53' }}>{apartment.title}</h5>
                <p className="text-secondary"><FontAwesomeIcon icon={faMapMarker} className="mr-1" />{apartment.location}</p>
                <div className="d-flex justify-content-between">
                    <p className="text-secondary"><FontAwesomeIcon icon={faBed} className="mr-1" />{apartment.bedroom} Bedrooms</p>
                    <p className="text-secondary"><FontAwesomeIcon icon={faBath} className="mr-1" />{apartment.bathroom} Bathrooms</p>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <h3 className="font-weight-bold" style={{ color: '#275A53' }}>${apartment.price}</h3>
                <Link to={`/apartmentDetails/${apartment._id}`}>
                    <button className="btn" style={{ background: '#275A53', color: '#ffffff' }}>View Details</button>
                </Link>
                
            </div>
        </div>
    );
};

export default SingleApt;