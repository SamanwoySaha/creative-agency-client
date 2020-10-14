import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './MakeReview.css';

const MakeReview = () => {
    const [review, setReview] = useState({});

    const handleBlur = (e) => {
        const reviewInfo = { ...review };
        reviewInfo[e.target.name] = e.target.value;
        setReview(reviewInfo);
    }

    const handleSubmit = (e) => {
        fetch('https://calm-savannah-67550.herokuapp.com/makeReview', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        e.preventDefault();
    }
    return (
        <div>
            <DashboardHeader><p>Review</p></DashboardHeader>
            <form onSubmit={handleSubmit} className="user-form">
                <input onBlur={handleBlur} type="text" className="form-control mb-3" name="clientName" placeholder="Your name" />
                <input onBlur={handleBlur} type="text" className="form-control mb-3" name="designation" placeholder="Company's name, Designation" />
                <textarea onBlur={handleBlur} name="comment" className="form-control mb-3" placeholder="Description"></textarea>
                <button type="submit" className="main-btn">Submit</button>
            </form>
        </div>
    );
};

export default MakeReview;