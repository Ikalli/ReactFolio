import React from 'react';
import './Header.css';
import { greeting, skills, experience, openSourceProjects, projects, achievements, blogs, contactInfo } from '../../portfolio';

function Header() {
	
	const onClickMenu = function(): void {
		const navMenu = document.getElementById("toggle-nav");
		if (!navMenu) throw new Error("HTML Error!");
		if (navMenu.className === "nav-menu") {
			navMenu.className += " responsive";
		} else {
			navMenu.className = "nav-menu";
		}
	}

	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="/">{greeting.username}</a>
					<span>/&gt;</span>
				</div>
				
				<div className="icon">
					<a href="#" className="icon fas fa-bars" onClick={onClickMenu}></a>
				</div>

				<ul className="nav-menu" id="toggle-nav">
					{skills.view && <li className="nav-list">
						<a href="#skills">
							Skills
						</a>
					</li>}
					{experience.view && <li className="nav-list">
						<a href="#experience">
							Experience
						</a>
					</li>}
					{openSourceProjects.view && <li className="nav-list">
						<a href="#opensource">
							Open Source
						</a>
					</li>}
					{projects.view && <li className="nav-list">
						<a href="#project">
							Projects
						</a>
					</li>}
					{achievements.view && <li className="nav-list">
						<a href="#achievement">
							Achievements
						</a>
					</li>}
					{blogs.view && <li className="nav-list">
						<a href="#blog">
							Blogs
						</a>
					</li>}
					{contactInfo.view && <li className="nav-list">
						<a href="#contact">
							Contact Me
						</a>
					</li>}
				</ul>

			</div>
		</header>
	);
}
export default Header;