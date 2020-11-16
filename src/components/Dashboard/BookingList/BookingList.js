import React from 'react';
import './BookingList.css';

const BookingList = () => {
    return (
        <div className="booking-table mx-auto py-3" >
            <table class="table table-bordered mx-auto p-4">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td scope="col" span="1">
                            <select className="status-change">
                                <option className="text-danger" >Pending</option>
                                <option value="done">Done</option>
                            </select>
                        </td>
                    </tr>                       

                </tbody>
            </table>
        </div>
    );
};

export default BookingList;