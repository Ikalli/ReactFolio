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

function Main() {
	return (
		<div className="root">
			<Header />
			<Hello />
			<Skill />
			<OpenSource />
			<Achievement />
			<Blog />
			<Contact />
			<Footer />
			<Top />
		</div>
	);
}
export default Main;