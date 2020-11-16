import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './AddHouse.css';

const AddHouse = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashboardHeader title='Add House'></DashboardHeader>
                    <div className="pt-5" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                        <form className="py-5 pl-3 pr-3 house-form mx-auto">
                            <div className="form-row">
                                <div className="col">
                                    <label className="font-weight-bold">Service Title</label>
                                    <input type="text" name="title" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">Price</label>
                                    <input type="text" name="price" class=" form-control form-control-file" required />
                                </div>
                            </div>

                            <div className="form-row mt-3">
                                <div className="col">
                                    <label className="font-weight-bold">Location</label>
                                    <input type="text" name="location" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">No of Bedroom</label>
                                    <input type="text" name="bedroom" class=" form-control form-control-file" required />
                                </div>
                            </div>

                            <div className="form-row mt-3">
                                <div className="col">
                                    <label className="font-weight-bold">No of Bathroom</label>
                                    <input type="text" name="bathroom" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">Thumbnail</label>
                                    <input type="file" class=" form-control form-control-file" required />
                                </div>
                            </div>

                            <div className="form-group mt-3 d-flex justify-content-end">
                                <button className="btn btn-all">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddHouse;