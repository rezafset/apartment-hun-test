import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div id="banner" className="d-flex align-items-center">
            <div className="container banner-container">
                <h1 className="text-uppercase pb-3 ml-3">Find Your House Rent</h1>
                <form class="form-inline my-lg-0">
                    <input type="text" class="form-control w-75 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-all my-2 my-sm-0" type="submit">Find Now</button>
                </form>
            </div>
        </div>

    );
};

export default Banner;