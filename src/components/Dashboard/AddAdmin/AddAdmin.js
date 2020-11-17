import React from 'react';
import { useForm } from 'react-hook-form'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:7000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('Admin Added Successfully')
                }
            })
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashboardHeader title='Add Admin'></DashboardHeader>
                    <div className="pt-5" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="py-5 pl-3 pr-3 house-form mx-auto">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <input type="email" name="email" ref={register({ required: true })} class="form-control " placeholder="rezafset17@gmail.com & Isakil416@gmail.com" />
                                    {errors.email && <span className="error text-danger">Email is required</span>}
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-all text-light brand-button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;