import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './MakeReview.css';
import popUp from '../../../Utilities/popUp';
import '../../../Utilities/popUp.css';

const MakeReview = () => {
    const { loggedInUser } = useContext(UserContext);
    const [ review, setReview ] = useState({});

    const handleBlur = (e) => {
        const reviewInfo = { ...review };
        reviewInfo[e.target.name] = e.target.value;
        setReview(reviewInfo);
    }

    const handleSubmit = (e) => {
        fetch('https://calm-savannah-67550.herokuapp.com/makeReview', {
            method: 'POST',
            body: JSON.stringify({ ...review, pic: loggedInUser.photo }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    popUp();
                }
            })
            .catch(err => console.log(err))

        e.preventDefault();
    }

    return (
        <div>
            <DashboardHeader><p>Review</p></DashboardHeader>
            <form onSubmit={handleSubmit} className="user-form">
                <input onBlur={handleBlur} type="text" className="form-control mb-3" name="clientName" placeholder="Your name" required/>
                <input onBlur={handleBlur} type="text" className="form-control mb-3" name="designation" placeholder="Company's name, Designation" required/>
                <textarea onBlur={handleBlur} name="comment" className="form-control mb-3" placeholder="Description" required></textarea>
                <div className="d-flex align-items-center justify-content-between">
                    <button type="submit" className="main-btn">Submit</button>
                    <p id="popUp">Review Added</p>
                </div>
            </form>
        </div>
    );
};

export default MakeReview;