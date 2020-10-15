import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Clients.css';

const Clients = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container className="clients px-0">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="d-flex flex-wrap justify-content-around justify-content-md-between align-items-center">
                        {
                            brands.map(brand =>
                                <img key={brand._id} className="clients-image img-fluid" src={brand.pic} alt="" />
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Clients;