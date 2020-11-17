import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import './Apartment.css';
// import apartment1 from '../../../resources/images/apartment1.png'
import SingleApt from './SingleApt/SingleApt';

const Apartment = () => {
    const [apartment, setApartment] = useState([]);

    useEffect(() => {
        fetch('https://agile-taiga-86357.herokuapp.com/house')
            .then(response => response.json())
            .then(data => setApartment(data))

    }, [])

    return (
        <div id="apartment">
            <div className="container py-5">
                <div className="row">
                    {
                        apartment.map((apartment, i) => <div className="col-md-4"><SingleApt key={i} apartment={apartment}></SingleApt></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apartment;