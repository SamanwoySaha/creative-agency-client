import React, { useContext, useState } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import User from '../User/User';
import Admin from '../Admin/Admin';
import Container from 'react-bootstrap/Container';
import { UserContext } from '../../../App';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const Dashboard = () => {
    const {loggedInUser} = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const { path } = useRouteMatch();

    return (
        <Container fluid>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar isAdmin={isAdmin}></Sidebar>
                </div>
                <div className="col-md-10">
                    <Switch>
                        <Route path={`${path}/admin`}>
                            <Admin></Admin>
                        </Route>
                        <Route path={`${path}/user`}>
                            <User></User>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;