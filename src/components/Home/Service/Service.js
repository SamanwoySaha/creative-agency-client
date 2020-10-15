import React, { useContext, useState } from 'react';
import './Service.css';
import { useSpring, animated } from 'react-spring';
import {UserContext} from '../../../App';
import { useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const { setOrderedService } = useContext(UserContext);
    const { icon, title, description } = service;
    const history = useHistory();
    const [ state, toggle ] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

    const handleClick = () => {
        setOrderedService(service);
        toggle(!state);
        setTimeout(() => {
            history.push('/dashboard');
        }, 1000)
    }
    
    return (
        <animated.div
            onClick={handleClick}
            style={{
                transform: x
                    .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
            }} 
            className="service text-center col-md-4 mt-4">
            <div className="mx-5 py-5">
                <img className="service-img img-fluid mb-4" src={`data:${icon.contentType};base64,${icon.img}`} alt="" />
                <h5 className="service-title mb-2">{title}</h5>
                <p className="service-description">{description}</p>
            </div>
        </animated.div>
    );
};

export default Service;