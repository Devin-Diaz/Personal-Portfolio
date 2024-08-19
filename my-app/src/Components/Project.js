// Project.js
import React from 'react';

const Project = ({ name, link, image }) => {
    return (
        <div className="project">
            <img src={image} alt={name} className="project-image" />
            <h3 className="project-name">{name}</h3>
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Details
            </a>
        </div>
    );
};

export default Project;
