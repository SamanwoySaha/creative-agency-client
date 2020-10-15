import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import popUp from '../../../Utilities/popUp';

const AddService = () => {
    const [serviceInfo, setServiceInfoInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...serviceInfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfoInfo(newInfo);
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);

        fetch('https://calm-savannah-67550.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    popUp();
                }
            })
            .catch(error => console.error(error))

        e.preventDefault();
    }

    return (
        <div>
            <DashboardHeader><p>Add Services</p></DashboardHeader>
            <div className="form-container">
                <form onSubmit={handleSubmit} action="" className="admin-form">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <label htmlFor="title">Service Title</label>
                            <input onBlur={handleBlur} className="form-control mb-3" type="text" id="title" name="title" placeholder="Enter title" required/>
                            <label htmlFor="description">Description</label>
                            <textarea onBlur={handleBlur} className="form-control" name="description" id="description" placeholder="Description" required/>
                        </div>
                        <div className="d-flex flex-column align-self-left">
                            <label>Icon</label>
                            <label htmlFor="image" className="file-input-label ml-n1">
                                <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                                Upload Image
                            </label>
                            <input onChange={handleChange} type="file" className="file-input" name="image" id="image" required/>
                        </div>
                        <div className="mt-auto d-flex align-items-center justify-content-between">
                            <p id="popUp" className="mr-5">Service Added</p>
                            <button type="submit" style={{ backgroundColor: '#009444' }} className="main-btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;