import React from 'react';
import './Achievement.css';
import { achievements } from '../../portfolio';
import AchievementCard from '../AhievementCard/AchievementCard'

function Achievement() {
    return (
        <section className="section--achievement" id="achievement">
            <div className="inner">

                <div className="achieve-title">
                    <p>{achievements.title}</p>
                </div>

                <div className="achieve-subtitle">
                    <p>{achievements.subTitle}</p>
                </div>

                <div className="achieve-content">
                    {achievements.lists.map((list, i) => {
                        return <AchievementCard achieves={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Achievement;