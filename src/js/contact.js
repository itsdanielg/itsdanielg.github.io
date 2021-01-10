import React from 'react';
// import {motion} from 'framer-motion';
import '../css/contact.css';
import descriptions from "../json/descriptions.json";

const learnMoreDescription = descriptions.contact.description;

function Contact() {

    var onSubmit = () => {
        var name = document.getElementById("contact-input-name").value;
        var email = document.getElementById("contact-input-email").value;
        var message = document.getElementById("contact-input-message").value;
        console.log([name, email, message]);
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">CONTACT</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body" id="contentBody">
                <p>{learnMoreDescription}</p>
                <form className="contact-form">
                    <input className="contact-input" id="contact-input-name" type="text" placeholder="Full Name" name="name"></input>
                    <input className="contact-input" id="contact-input-email" type="text" placeholder="Email" name="email"></input>
                    <textarea className="contact-input" id="contact-input-message" type="text" placeholder="Enter your message!" name="message"></textarea>
                </form>
                <div className="contact-submit" onClick={onSubmit}>Submit</div>
            </div>
        </div>
    );

}

export default Contact;