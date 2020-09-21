import React from 'react';
import { experience } from '../../portfolio';
import ExpCard from '../ExpCard/ExpCard';
import './Experience.css';

function Experience() {
    return (
        <section className="section--exp" id="experience">
            <div className="inner">

                <div className="exp-title">
                    <p>{experience.title}</p>
                </div>

                <div className="exp-cards">
                    {experience.lists.map((list, i) => {
                        return <ExpCard experience={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Experience;