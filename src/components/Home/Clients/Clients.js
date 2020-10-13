import React from 'react';
import Container from 'react-bootstrap/Container';
import './Clients.css';

const Clients = () => {
    const clientList = [
        { id:1, pic: 'https://i.imgur.com/shYwI91.png'},
        { id:2, pic: 'https://i.imgur.com/GlhDjLt.png'},
        { id:3, pic: 'https://i.imgur.com/eLtzASg.png'},
        { id:4, pic: 'https://i.imgur.com/PDFR78l.png'},
        { id:5, pic: 'https://i.imgur.com/Wrul59y.png'},
    ];
    return (
        <Container className="clients px-0">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="d-flex justify-content-between align-items-center">
                    {
                        clientList.map(client => 
                            <img key={client.id} className="clients-image img-fluid" src={client.pic} alt="" />
                        )
                    }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Clients;