import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './MakeReview.css';

const MakeReview = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <div>
            <DashboardHeader><p>Review</p></DashboardHeader>
            <form className="user-form" action="">
                <input type="text" className="form-control mb-3" name="name" placeholder="Your name" />
                <input type="text" className="form-control mb-3" name="company's name" placeholder="Company's name, Designation" />
                <textarea name="description" className="form-control mb-3" placeholder="Description"></textarea>
                <button type="submit" className="main-btn">Submit</button>
            </form>
        </div>
    );
};

export default MakeReview;