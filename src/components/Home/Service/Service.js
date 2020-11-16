import React, { useState } from 'react';
import service1 from '../../../resources/logos/service1.png';
import service2 from '../../../resources/logos/service2.png';
import service3 from '../../../resources/logos/service3.png';
import './Service.css';

const Service = () => {
    const [serviceInfo] = useState([
        {
            img: service1,
            title: 'Wide Range of Properties',
            description: 'With a robust selection of popular properties on hand as well as leading properties from experts.'
        },
        {
            img: service2,
            title: 'Financing Made Easy',
            description: 'Our stress-free finance department that can find financial solutions to save money for you.'
        },
        {
            img: service3,
            title: 'Trusted by Thousands',
            description: '10 new offers every day. 350 offers on site trusted by a community of thousands of users.'
        },
    ]);
    return (
        <div id="service">
            <div className="container py-5">
                <div className="text-center" style={{ color: '#275A53' }}>
                    <p className="mb-0"><small>Service</small> </p>
                    <h3 className="font-weight-bold">We're an agency tailored to all<br />client's need that always delivers</h3>
                </div>
                <div className="row">
                    {
                        serviceInfo.map(service =>
                            <div className="col-md-4 mt-5">
                                <div className="card text-center">
                                    <img className="card-img-top mx-auto service-img" src={service.img} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold" style={{ color: '#275A53' }}>{service.title}</h5>
                                        <p className="text-secondary">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;