import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <Container className="px-0">
                <div className="row">
                    <div className="col-sm-12 col-md-5 text-center text-md-left">
                        <h1 className="heading text-center text-md-left mb-4">Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-sm-12 offset-md-1 col-md-6">
                        <form>
                            <input type="email" className="form-control contact-input mb-3" placeholder="Your email address" />
                            <input type="text" className="form-control contact-input mb-3" placeholder="Your name / company's name" />
                            <textarea className="form-control contact-message mb-3" placeholder="Your message"></textarea>
                            <button type="submit" className="main-btn">Send</button>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </Container>
        </section>
    );
};

export default Contact;