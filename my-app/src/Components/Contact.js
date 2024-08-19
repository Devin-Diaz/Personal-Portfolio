import React from 'react';
import linkedinIcon from '../Images/linkedin.png';
import githubIcon from '../Images/github.png';
import emailIcon from '../Images/email.png';
import handshakeIcon from '../Images/handshake.png';
import '../Styles/contactStyle.css';

export default function Contact() {
    return (
        <>
        <h1>Contact</h1>
        <div className="contact-container">
            <div className="contact-methods">
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/diazdevin/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
                        <p className="contact-label">LinkedIn</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://github.com/Devin-Diaz" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="contact-icon" />
                        <p className="contact-label">GitHub</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="mailto:diazdevin7@outlook.com">
                        <img src={emailIcon} alt="Email" className="contact-icon" />
                        <p className="contact-label">diazdevin7@outlook.com</p>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://app.joinhandshake.com/profiles/51038248" target="_blank" rel="noopener noreferrer">
                        <img src={handshakeIcon} alt="Handshake" className="contact-icon" />
                        <p className="contact-label">Handshake</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
