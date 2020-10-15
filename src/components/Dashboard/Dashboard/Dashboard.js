import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import User from '../User/User';
import Admin from '../Admin/Admin';
import Container from 'react-bootstrap/Container';
import { UserContext } from '../../../App';
import { Route, useRouteMatch, Switch, useHistory } from 'react-router-dom';


const Dashboard = () => {
    const { loggedInUser } = useContext(UserContext);
    const [ isAdmin, setIsAdmin ] = useState(false);
    const { path } = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
                if (data) {
                    history.push(`${path}/adminServiceList`);
                }
                else {
                    history.push(`${path}/order`);
                }
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Container fluid>
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <Sidebar isAdmin={isAdmin}></Sidebar>
                </div>
                <div className="col-sm-12 col-md-10">
                    <Switch>
                        {
                            isAdmin
                                ? <Route path={`${path}`}>
                                    <Admin></Admin>
                                </Route>
                                : <Route path={`${path}`}>
                                    <User></User>
                                </Route>
                        }
                    </Switch>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;