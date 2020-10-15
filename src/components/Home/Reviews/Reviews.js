import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Review from '../Review/Review';
import Container from 'react-bootstrap/Container';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container className="reviews">
            <h1 className="heading">
                Clients <span className="special">Feedback</span>
            </h1>
            <div className="row mt-5">
                {
                    reviews.map((review) => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </Container>
    );
};

export default Reviews;