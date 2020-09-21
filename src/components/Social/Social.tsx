import React from 'react';
import './Social.css'
import { socialMediaLinks } from "../../portfolio";

function Social() {
	return(
		<div className="social-media-links">
			{socialMediaLinks.github && <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>}
			{socialMediaLinks.linkedin && <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-linkedin"></i>
			</a>}
			{socialMediaLinks.email && <a href={`mailto:${socialMediaLinks.email}`} className="icon-button email" target="_blank" rel="noopener noreferrer">
				<i className="fas fa-envelope"></i>
			</a>}
			{socialMediaLinks.facebook && <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-facebook"></i>
			</a>}
			{socialMediaLinks.twitter && <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-twitter"></i>
			</a>}
			{socialMediaLinks.instagram && <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-instagram"></i>
			</a>}
			{socialMediaLinks.medium && <a href={socialMediaLinks.medium} className="icon-button medium" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-medium"></i>
			</a>}
			{socialMediaLinks.stackoverflow && <a href={socialMediaLinks.stackoverflow} className="icon-button stackoverflow" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-stack-overflow"></i>
			</a>}
		</div>
	);
}
export default Social;