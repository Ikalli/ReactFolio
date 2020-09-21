import React from 'react';
import { experience } from '../../portfolio';

function Experience() {
    return (
        <section className="section--exp">
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