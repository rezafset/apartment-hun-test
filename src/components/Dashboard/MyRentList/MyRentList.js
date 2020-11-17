import React from 'react';
import './MyRentList.css';

const MyRentList = ({ rent }) => {
    return (

        <div className="booking-table mx-auto py-3" >
            <table class="table table-bordered mx-auto p-4">
                <thead>
                    <tr>
                        <th scope="col">House Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    rent.map(rent=>
                        <tbody>
                            <tr>
                                <td>{rent.title}</td>
                                <td>{rent.location}</td>
                                <td>{rent.price}</td>
                                <td>{rent.status}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default MyRentList;