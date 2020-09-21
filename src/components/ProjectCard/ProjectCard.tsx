import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: any) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <a className="project-card-main" href={project.url}>
            <div className="card-title">
                <p>{project.title}</p>
            </div>
            <div className="card-desc">
                <p>{project.desc}</p>
            </div>
        </a>
        </Fade>
    );
}
export default ProjectCard;