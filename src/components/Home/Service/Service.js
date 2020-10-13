import React, { useState } from 'react';
import './Service.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Service = ({ service }) => {
    const { pic, title, description } = service;
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
    
    return (
        <animated.div
            onClick={() => toggle(!state)}
            style={{
                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: x
                    .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
            }} 
            className="service text-center col-md-4 mt-4">
            <div className="mx-5 py-5">
                <img className="service-img img-fluid mb-4" src={pic} alt="" />
                <h5 className="service-title mb-2">{title}</h5>
                <p className="service-description">{description}</p>
            </div>
        </animated.div>
    );
};

export default Service;