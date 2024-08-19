// ProjectGrid.js
import React from 'react';
import Project from './Project';
import '../Styles/projectGridStyle.css';
import data from './projectData';

const ProjectGrid = () => {
    return (
        <div className="project-grid-container">
            <h1>Projects</h1>
            <div className="project-grid">
                {data.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        link={project.link}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;
