import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './DashboardHeader.css';

const DashboardHeader = (props) => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <>
            <div className="dashboard-heading bg-white d-flex justify-content-between">
                {props.children}
                {
                    loggedInUser &&
                    <h5>
                        <img src={loggedInUser.photo} alt="" />
                        {loggedInUser.name}
                    </h5>
                }
            </div>
        </>
    );
};

export default DashboardHeader;