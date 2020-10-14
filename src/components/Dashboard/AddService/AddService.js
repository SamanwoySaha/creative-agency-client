import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    return (
        <div>
            <DashboardHeader><p>Add Services</p></DashboardHeader>
            <div className="form-container">
                <form action="" className="admin-form">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <label htmlFor="title">Service Title</label>
                            <input className="form-control mb-3" type="text" id="title" name="title" placeholder="Enter title" />
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" name="description" id="description" placeholder="Description" />
                        </div>
                        <div className="d-flex flex-column align-self-left">
                            <label>Icon</label>
                            <label htmlFor="image" className="file-input-label ml-n1">
                                <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                            Upload Image
                        </label>
                            <input type="file" className="file-input" name="image" id="image" />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#009444' }} className="main-btn mt-auto">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;