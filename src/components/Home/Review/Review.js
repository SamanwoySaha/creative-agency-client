import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { clientName, designation, comment } = review;
    return (
        <div className="col-sm-6 col-md-4">
            <div className="review mt-5">
                <div className="d-flex align-items-center mb-3">
                    { review.pic && <img className="review-img" src={review.pic} alt=""/> }
                    <div>
                        <h5 className="review-clientName mt-1 mb-1">{clientName}</h5>
                        <p className="review-designation mb-0">{designation}</p>
                    </div>
                </div>
                <p className="article-text review-comment">{comment}</p>
            </div>
        </div>
    );
};

export default Review;