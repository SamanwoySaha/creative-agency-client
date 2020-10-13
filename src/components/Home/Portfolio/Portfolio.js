import React from 'react';
import './Portfolio.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfolio } from '../../../fakeData/fakeData';

const Portfolio = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: '50px',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        adaptiveHeight: true,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="portfolio">
            <h1 className="heading text-white">Here are some of <span className="special">our works</span></h1>
            <Slider {...settings} className="container px-0 portfolio-slider">
                {
                    portfolio.map(item =>
                        <div>
                            <img className="portfolio-img" key={item.pic} src={item.pic} alt="" />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Portfolio;