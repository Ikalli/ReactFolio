import React from 'react';
import './Social.css'
import { socialMediaLinks } from "../../portfolio";

function Social() {
	return(
		<div className="social-media-links">
			<a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>
			<a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-linkedin"></i>
			</a>
			<a href={`mailto:${socialMediaLinks.email}`} className="icon-button email" target="_blank" rel="noopener noreferrer">
				<i className="fas fa-envelope"></i>
			</a>
			<a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-facebook"></i>
			</a>
			<a href={socialMediaLinks.medium} className="icon-button medium" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-medium"></i>
			</a>
		</div>
	);
}
export default Social;