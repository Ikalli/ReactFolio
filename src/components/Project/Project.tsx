import React from 'react';
import './Project.css';
import { projects } from '../../portfolio';

function Project() {
    return (
        <section className="section--project">
            <div className="inner">

                <div className="project-title">
                    <p>{projects.title}</p>
                </div>
                <div className="project-subtitle">
                    <p>{projects.subTitle}</p>
                </div>
                <div className="project-cards">
                    
                </div>

            </div>
        </section>
    );
}
export default Project;