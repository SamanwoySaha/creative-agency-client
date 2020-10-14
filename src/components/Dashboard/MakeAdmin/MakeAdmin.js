import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div>
            <DashboardHeader><p>Make Admin</p></DashboardHeader>
            <div className="form-container" style={{ height: '305px' }}>
                <form action="" className="admin-form">
                    <div className="d-flex">
                        <div>
                        <label htmlFor="email">Email</label>
                        <input className="form-control mt-n1 mr-2" type="email" id="email" name="email" placeholder="Enter email address" />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#009444' }} className="main-btn h-100 mt-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;