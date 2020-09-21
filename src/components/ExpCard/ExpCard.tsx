import React from 'react';
import './ExpCard.css';

function ExpCard({ experience }: any) {
    return (
        <div className="expcard-main">
            <div className="inner">
                
                <div className="expcard-date">
                    {experience.date}
                </div>
                <div className="expcard-company">
                    {experience.company}
                </div>
                <div className="expcard-role">
                    {experience.role}
                </div>

            </div>
        </div>
    );
}
export default ExpCard;