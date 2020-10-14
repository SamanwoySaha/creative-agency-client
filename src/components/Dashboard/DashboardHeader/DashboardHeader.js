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
                    <h5 className="mr-5">
                        <img style={{ borderRadius: '50%', width: '40px', height: '40px' }} 
                        src={loggedInUser.photo} className="mr-2" alt="" />
                        {loggedInUser.name}
                    </h5>
                }
            </div>
        </>
    );
};

export default DashboardHeader;