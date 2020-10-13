import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import User from '../User/User';
import Admin from '../Admin/Admin';

const Dashboard = () => {
    return (
        <div>
            <h1>this is Dashboard</h1>
            <Sidebar></Sidebar>
            <Admin></Admin>
            <User></User>
        </div>
    );
};

export default Dashboard;