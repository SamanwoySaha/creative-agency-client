import React from 'react';
import './Reviews.css';
import Review from '../Review/Review';
import { reviews } from '../../../fakeData/fakeData';
import Container from 'react-bootstrap/Container';

const Reviews = () => {
    return (
        <Container className="reviews">
            <h1 className="heading">
                Clients <span className="special">Feedback</span>
            </h1>
            <div className="row mt-5">
            { 
                reviews.map((review) => <Review review={review}></Review>)
            }
            </div>
        </Container>
    );
};

export default Reviews;