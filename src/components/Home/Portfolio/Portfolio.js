import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerPadding: '30px',
                }
            }
        ]
    };

    const [portfolioWorks, setPortfolioWorks] = useState([]);

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/portfolio')
            .then(res => res.json())
            .then(data => setPortfolioWorks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section id="portfolio">
            <h1 className="heading text-white">Here are some of <span className="special">our works</span></h1>
            <Slider {...settings} className="container px-0 portfolio-slider">
                {
                    portfolioWorks.map(item =>
                        <div key={item._id}>
                            <img className="portfolio-img" src={item.pic} alt="" />
                        </div>
                    )
                }
            </Slider>
        </section>
    );
};

export default Portfolio;