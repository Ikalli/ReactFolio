import React from 'react';
import './Skill.css';
import { skills } from '../../portfolio';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section--skill" id="skills">
            <div className="inner">

                <Fade left duration={800}>
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.subTitle}</p>
                    </div>
                    <div className="skill-icons">
                        <ul className="icons">
                            {skills.icons.map((icon, i) => (
                                <li className="icon-inline" key={i}>
                                    <i className={icon.fontAwesome}></i>
                                    <p>{icon.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skill-desc">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="skill-image">
                    <i className="fas fa-code"></i>
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Skill;