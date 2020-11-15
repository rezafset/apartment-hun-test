import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/logos/Logo.png';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link to="/" class="navbar-brand">
                    <img class="logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ml-2">
                            <a class="nav-link text-dark" href="#home">Home</a>
                        </li>
                        <li class="nav-item ml-2">
                            <a class="nav-link text-dark" href="#about">About</a>
                        </li>
                        <li class="nav-item ml-2">
                            <a class="nav-link text-dark" href="#apartment">Apartment</a>
                        </li>
                        <li class="nav-item ml-2">
                            <a class="nav-link text-dark" href="#service">Service</a>
                        </li>
                        <li class="nav-item ml-2">
                            <a class="nav-link text-dark" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item ml-2">
                            <button class="btn btn-all">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;