import {useRef} from 'react';
import emailjs from 'emailjs-com'
import SocialLink from '../components/SocialLink';
import descriptions from "../json/descriptions.json";
import contact from "../json/contact.json";
import '../css/contact.css';

const serviceID = 'service_0v89qij';
const templateID = 'default_template_id';
const userID = 'user_gJB2xJxcjxHaAsGivS4G1';

function Contact() {

    const nameRef: any = useRef(false);
    const emailRef: any = useRef(false);
    const subjectRef: any = useRef(false);
    const messageRef: any = useRef(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        let message: any = document.getElementById("contactSentMessage");
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

    const clearForm = () => {
        nameRef.current.getElementById("contact-input-name").value = "";
        emailRef.current.getElementById("contact-input-email").value = "";
        subjectRef.current.getElementById("contact-input-subject").value = "";
        messageRef.current.getElementById("contact-input-message").value = "";
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="title-heading">CONTACT</h1>
                <div className='title-underline'></div>
            </div>
            <div className="page-body" id="contact_body">
                <h2>{descriptions.contact.heading}</h2>
                <p>{descriptions.contact.description}</p>
                <div className="social-links-container">
                    {contact.links.map((contact, index) => {
                        return (
                            <SocialLink key={index} name={contact.name} url={contact.url} icon={contact.image}/>
                        )
                    })}
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input ref={nameRef} className="contact-input" id="contact-input-name" type="text" placeholder="Full Name" name="name"></input>
                    <input ref={emailRef} className="contact-input" id="contact-input-email" type="text" placeholder="Email" name="email"></input>
                    <input ref={subjectRef} className="contact-input" id="contact-input-subject" type="text" placeholder="Subject" name="subject"></input>
                    <textarea ref={messageRef} className="contact-input" id="contact-input-message" placeholder="Enter your message!" name="message"></textarea>
                    <input className="contact-submit" type="submit" value="Submit"></input>
                </form>
                <p className="contact-sent" id="contactSentMessage"></p>
            </div>
        </div>
    );

}

export default Contact;