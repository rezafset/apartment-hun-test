import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ background: '#275A53' }}>
            <div className="container text-light py-5">
                <div className="row">
                    <div className="col-md-5 d-flex">
                        <i class="fa fa-map-marker mr-1 pt-1"></i>
                        <p>
                            <span>H#340(4th Floor), Road#24,</span> <br /> <span>New DOHS, Mahakhali, Dhaka, Bangladesh</span> <br /> <span>Phone: 01674957611</span> <br /> <span>E-mail: info@company.com</span>
                        </p>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="font-weight-bold">Company</h5>
                                <ul class="list-group">
                                    <Link class="list-group-item">About</Link>
                                    <Link class="list-group-item">Site Map</Link>
                                    <Link class="list-group-item">Support Center</Link>
                                    <Link class="list-group-item">Terms Conditions</Link>
                                    <Link class="list-group-item">Submit Listing</Link>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5 className="font-weight-bold mt-md-0 mt-3">Quick Links</h5>
                                <ul class="list-group">
                                    <Link class="list-group-item">Quick Links</Link>
                                    <Link class="list-group-item">Rentals</Link>
                                    <Link class="list-group-item">Sales</Link>
                                    <Link class="list-group-item">Contact</Link>
                                    <Link class="list-group-item">Terms Conditions</Link>
                                    <Link class="list-group-item">Our Blog</Link>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5 className="font-weight-bold mt-md-0 mt-3">About US</h5>
                                <p className="mt-3">We are the top real estate <br />agency in Sydney with agents <br />available to answer any <br />question 24/7 </p>
                                <div className="icon mt-4">
                                    <a
                                        className="mr-3"
                                        href="#"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-facebook-square"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <a
                                        className="mr-3"
                                        href="#"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-instagram"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <a
                                        className="mr-3"
                                        href="#"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-linkedin-square"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <a
                                        className="mr-3"
                                        href="#"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-youtube"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;