import React from 'react';
import Container from 'react-bootstrap/Container';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <Container className="px-0">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-5 text-center text-md-left">
                        <h1 className="banner-heading mb-4">Let’s Grow Your Brand To The Next Level</h1>
                        <p className="sec-color banner-article mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                        <button className="main-btn">Hire us</button>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <img src="https://i.imgur.com/xviGCWB.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;