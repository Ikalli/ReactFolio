import React from 'react';
import './Project.css';
import { projects } from '../../portfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

function Project() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <section className="section--project">
            <div className="inner">

                <div className="project-title">
                    <p>{projects.title}</p>
                </div>
                <div className="project-subtitle">
                    <p>{projects.subTitle}</p>
                </div>

                <Fade bottom duration={800}>
                <div className="project-cards">
                    {projects.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Project;