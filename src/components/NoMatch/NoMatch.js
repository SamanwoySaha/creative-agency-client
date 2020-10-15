import React from 'react';
import Container from 'react-bootstrap/Container';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <Container fluid>
            <img src="https://i.imgur.com/nufX7I3.png" className="w-100" style={{height: '100vh'}} alt=""/>
        </Container>
    );
};

export default NoMatch;