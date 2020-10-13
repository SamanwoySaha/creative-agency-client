import React from 'react';
import './Admin.css';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Admin = () => {
    return (
        <div>
            <AdminServiceList></AdminServiceList>
            <AddService></AddService>
            <MakeAdmin></MakeAdmin>
        </div>
    );
};

export default Admin;