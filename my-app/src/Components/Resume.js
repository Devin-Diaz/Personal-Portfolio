// Resume.js
import React from 'react';
import '../Styles/resumeStyle.css'
import resumePDF from '../Devin_Diaz_Software_Engineer_Intern_Resume.pdf';

export default function Resume() {
    return (
        <>
        <h1>Resume</h1>
        <div className="resume-container">
            <div className="resume-preview">
                <object
                    data={resumePDF}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                >
                    <p>
                        It appears you don't have a PDF plugin for this browser. No biggie...
                        you can <a href={resumePDF} download>click here to download the PDF file.</a>
                    </p>
                </object>
            </div>
            <div className="resume-download">
                <a href={resumePDF} download className="download-button">
                    Download Resume
                </a>
            </div>
        </div>
        </>
    );
}
