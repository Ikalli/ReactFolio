import React from 'react';
import { experience } from '../../portfolio';
import ExpCard from '../ExpCard/ExpCard';
import './Experience.css';

function Experience() {
    const Fade = require('react-reveal/Fade');
    return (
        <section className="section--exp" id="experience">
            <div className="inner">

                <div className="exp-title">
                    <p>{experience.title}</p>
                </div>

                <Fade bottom duration={800}>
                <div className="exp-cards">
                    {experience.lists.map((list, i) => {
                        return <ExpCard experience={list} key={i} />
                    })}
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Experience;