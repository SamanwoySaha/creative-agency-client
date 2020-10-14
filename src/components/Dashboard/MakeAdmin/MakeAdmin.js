import React, { useRef } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const email = useRef('');

    const handleSubmit = (e) => {
        fetch('https://calm-savannah-67550.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.current.value })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        e.preventDefault();
    }

    return (
        <div>
            <DashboardHeader><p>Make Admin</p></DashboardHeader>
            <div className="form-container" style={{ height: '305px' }}>
                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="d-flex">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input className="form-control mt-n1 mr-2" type="email" ref={email} name="email" placeholder="Enter email address" />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#009444' }} className="main-btn h-100 mt-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;