import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../resources/logos/Logo.png'
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPlus, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://agile-taiga-86357.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar">
            <Link to="/">
                <img className="logo mt-3 ml-2" src={logo} alt="" />
            </Link>
            <Nav defaultActiveKey="/home" className="flex-column mt-5">
                {
                    isAdmin ?
                        <div>
                            <Nav.Link>
                                <Link to="/dashboard/booking" className="text-dark" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                                    <span>Booking List</span>
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/dashboard/makeAmin" className="text-dark" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                                    <span>Add Admin</span>
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/dashboard/addHouse" className="text-dark" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                    <span>Add House</span>
                                </Link>
                            </Nav.Link>
                        </div>
                        :
                        <Nav.Link>
                            <Link to="/dashboard/myRent" className="text-dark" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                <span>My Rent</span>
                            </Link>
                        </Nav.Link>
                }
            </Nav>
        </div>
    );
};

export default Sidebar;