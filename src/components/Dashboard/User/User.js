import React from 'react';
import './User.css';
import Order from '../Order/Order';
import ClientServiceList from '../ClientServiceList/ClientServiceList';
import MakeReview from '../MakeReview/MakeReview';

const User = () => {
    return (
        <div>
            <Order></Order>
            <ClientServiceList></ClientServiceList>
            <MakeReview></MakeReview>
        </div>
    );
};

export default User;