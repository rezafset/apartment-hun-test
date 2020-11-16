import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../resources/logos/Logo.png'
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">
                <img className="logo mt-3 ml-2" src={logo} alt="" />
            </Link>
            <Nav defaultActiveKey="/home" className="flex-column mt-5">
                <Nav.Link>
                    <Link to="/dashboard/booking" className="text-dark" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                        <span>Booking List</span>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/dashboard/addHouse" className="text-dark" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        <span>Add House</span>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/dashboard/myRent" className="text-dark" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        <span>My Rent</span>
                    </Link>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;