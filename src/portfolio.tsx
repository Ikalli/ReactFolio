import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Username',
	title: 'Hello I\'m Username',
	subTitle: emoji("subTitle ❤"),
	role: "Your role",
	resumeLink: "Your resume link... google drive or something else",
	// If you don't want to show this, change view to false.
	view: true
};

export const socialMediaLinks = {
	github: 'Your github link',
	linkedin: 'Your linkedin link',
	email: 'your email link',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "A FRONT-END DEVELOPER WHO WANTS TO EXPLORE MORE TECHs & BACK-END",
	describeSkills: [
		emoji("✔ Develop responsive web application"),
		emoji("✔ Interesting in PWA(Progressive Web App) and SPA"),
		emoji("✔ Integration of third party services such as AWS, Firebase"),
		emoji("✔ Proficient in using Git, good communication skills"),
		emoji("✔ Interesting in TypeScript and designing web using Redux"),
	],
	icons: [
		{fontAwesome: "fab fa-html5", text: "HTML5", key: 1},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", key: 2},
		{fontAwesome: "fab fa-js", text: "JS", key: 3},
		{fontAwesome: "fab fa-sass", text: "Sass", key: 4},
		{fontAwesome: "fab fa-react", text: "React", key: 5},
		{fontAwesome: "fab fa-aws", text: "AWS", key: 6},
	],
	view: true
};

export const experience = {
	title: "Experience",
	subTitle: "",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "TOY PROJECTS OR OTHER BIG PROJECTS THAT I PARTICIPATED IN",
	list: [
		{
			title: "asdf",
			desc: "blabla"
		}, 
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "ACHIEVEMENTS, CERTIFICATIONS AND SOME COOL STUFFS THAT I HAVE DONE!",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!",
			key: 1
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!",
			key: 2
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "BLOG POSTS WHICH ABOUT TECHS, PROJECTS, AND DAILY LIFE!",
	lists: [
		{
			title: "Leetcode Solutions",
			desc: "Solutions and explanations for Leetcode algorithm problems.",
			url: "https://ikalli.tistory.com/category/Leetcode",
			key: 1
		},
		{
			title: "Intoduction of TensorFlow",
			desc: "Categorize images of clothes using TensorFlow, python library. Read docs of TensorFlow and wrote codes in Google Colab.",
			url: "https://ikalli.tistory.com/6?category=895084",
			key: 2
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "REACH OUT TO ME AND DISCUSS WITH ME! IT'S OK TO JUST SAY 'HI?'",
	introduce: emoji("Wanna be Full-Stack Developer👨‍💻 | Working Hard, Fully Passionated!🔥 | Future Google Developer❤"),
	view: true
}