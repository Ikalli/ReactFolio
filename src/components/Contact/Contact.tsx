import React from 'react';
import './Contact.css';
import { contactInfo } from '../../portfolio';
import Social from '../Social/Social';

function Contact() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <Fade bottom duration={800}>
        <section className="section--contact" id="contact">

            <div className="contact-title">
                <p>{contactInfo.title}</p>
            </div>
            <div className="inner">
                
                <div className="img-ikalli">
                    <img src={require("../../assets/Ikalli.jpg")} alt="happy Ikalli" />
                </div>
                <div className="wrapper-inner">
                    <div className="contact-subtitle">
                        <p>{contactInfo.subTitle}</p>
                    </div>
                    <div className="contact-introduce">
                        <p>{contactInfo.introduce}</p>
                    </div>
                    <div className="contact-content">
                        <p>I'm Open To Opportunities! 😁</p>
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
                
            </div>
        </section>
        </Fade>
    );
}
export default Contact;