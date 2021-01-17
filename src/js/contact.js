import React from 'react';
import emailjs from 'emailjs-com'
// import {motion} from 'framer-motion';
import '../css/contact.css';
import descriptions from "../json/descriptions.json";

const learnMoreHeading = descriptions.contact.heading;
const learnMoreDescription = descriptions.contact.description;

const linkedinLink = "https://www.linkedin.com/in/itsdanielg/";
const githubLink = "https://github.com/itsdanielg";
const instagramLink = "https://www.instagram.com/itsdanielg_/";

const linkedinIcon = "/svg/linkedin.svg";
const githubIcon = "/svg/github.svg";
const instagramIcon = "/svg/instagram.svg";

const serviceID = 'service_0v89qij';
const templateID = 'default_template_id';
const userID = 'user_gJB2xJxcjxHaAsGivS4G1';

function Contact() {

    var sendEmail = (e) => {
        e.preventDefault();
        var message = document.getElementById("contactSentMessage");
        emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((success) => {
            message.innerHTML = "Your message has been sent!"
            message.style.color = "var(--green)";
            clearForm();
            console.log(success.text);
        }, (error) => {
            message.innerHTML = "Your message could not be sent!"
            message.style.color = "var(--red)";
            console.log(error.text);
        });
        message.classList.remove("contact-sent");
        setTimeout(() => {
            message.classList.add("contact-sent");
        }, 1);
    }

    var clearForm = () => {
        document.getElementById("contact-input-name").value = "";
        document.getElementById("contact-input-email").value = "";
        document.getElementById("contact-input-subject").value = "";
        document.getElementById("contact-input-message").value = "";
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">CONTACT</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body" id="contact_body">
                <h2>{learnMoreHeading}</h2>
                <p>{learnMoreDescription}</p>
                <div className="social-links-container">
                    <div className="social-link-wrapper">
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn Icon"></img>
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github Icon"></img>
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram Icon"></img>
                        </a>
                    </div>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="contact-input" id="contact-input-name" type="text" placeholder="Full Name" name="name"></input>
                    <input className="contact-input" id="contact-input-email" type="text" placeholder="Email" name="email"></input>
                    <input className="contact-input" id="contact-input-subject" type="text" placeholder="Subject" name="subject"></input>
                    <textarea className="contact-input" id="contact-input-message" type="text" placeholder="Enter your message!" name="message"></textarea>
                    <input className="contact-submit" type="submit" value="Submit"></input>
                </form>
                <p className="contact-sent" id="contactSentMessage"></p>
            </div>
        </div>
    );

}

export default Contact;