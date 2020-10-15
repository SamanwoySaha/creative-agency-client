import React from 'react';
import './Admin.css';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const Admin = () => {
    const { path } = useRouteMatch();
    
    return (
        <div className="admin">
            <Switch>
                <Route path={`${path}/adminServiceList`}>
                    <AdminServiceList></AdminServiceList>
                </Route>
                <Route path={`${path}/addService`}>
                    <AddService></AddService>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;