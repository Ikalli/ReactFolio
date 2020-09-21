import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import OpenSource from './OpenSource/OpenSource';
import Achievement from './Achievement/Achievement';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import { greeting, skills, experience, openSourceProjects, projects, achievements, blogs, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{openSourceProjects.view && <OpenSource />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;