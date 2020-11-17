import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './AddHouse.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const AddHouse = () => {
    const history = useHistory();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('location', info.location);
        formData.append('bedroom', info.bedroom);
        formData.append('bathroom', info.bathroom);

        fetch('http://localhost:7000/addHouse', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                // alert('Service added Successfully');
                toast.success('New House Added Successfully');
                history.push('/');
            }
        })
        .catch(error => {
            console.error(error)
        })

        e.preventDefault();

        e.target.reset();
    }


    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <DashboardHeader title='Add House'></DashboardHeader>
                    <div className="pt-5" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                        <form onSubmit={handleSubmit} className="py-5 pl-3 pr-3 house-form mx-auto">
                            <div className="form-row">
                                <div className="col">
                                    <label className="font-weight-bold">Service Title</label>
                                    <input onBlur={handleBlur} type="text" name="title" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">Price</label>
                                    <input onBlur={handleBlur} type="text" name="price" class=" form-control form-control-file" required />
                                </div>
                            </div>

                            <div className="form-row mt-3">
                                <div className="col">
                                    <label className="font-weight-bold">Location</label>
                                    <input onBlur={handleBlur} type="text" name="location" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">No of Bedroom</label>
                                    <input onBlur={handleBlur} type="text" name="bedroom" class=" form-control form-control-file" required />
                                </div>
                            </div>

                            <div className="form-row mt-3">
                                <div className="col">
                                    <label className="font-weight-bold">No of Bathroom</label>
                                    <input onBlur={handleBlur} type="text" name="bathroom" class="form-control " placeholder="Enter Title" required />
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">Thumbnail</label>
                                    <input onChange={handleFileChange} type="file" class=" form-control form-control-file" required />
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