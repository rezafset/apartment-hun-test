import React from 'react';
import './MyRentList.css';

const MyRentList = () => {
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
                <tbody>

                    <tr>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        <td>Demo</td>
                        {/* <td scope="col" span="1">
                            <select className="status-change">
                                <option className="text-danger" >Pending</option>
                                <option value="done">Done</option>
                            </select>
                        </td> */}
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyRentList;