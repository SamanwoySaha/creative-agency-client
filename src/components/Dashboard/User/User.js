import React from 'react';
import './User.css';
import Order from '../Order/Order';
import ClientServiceList from '../ClientServiceList/ClientServiceList';
import MakeReview from '../MakeReview/MakeReview';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const User = () => {
    const { path } = useRouteMatch();

    return (
        <div className="user">
            <Switch>
                <Route path={`${path}/order`}>
                    <Order></Order>
                </Route>
                <Route path={`${path}/clientServiceList`}>
                    <ClientServiceList></ClientServiceList>
                </Route>
                <Route path={`${path}/makeReview`}>
                    <MakeReview></MakeReview>
                </Route>
            </Switch>


        </div>
    );
};

export default User;