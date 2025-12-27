const classId = {
	name: 'mohammed khaled',
}
const content = {
	button: 'Resume',
	url: 'public/cv/cv-mohammed.pdf',
	desc: 'I am good at designing websites and stores.I am good at designing websites, stores, personal websites, and everything related to the web. I have no less than 5 years of experience and have worked on many projects, including store design.E-commerce ',
	pro: 'Jolt',
	dr: 'I help in web development',
	hi: 'Hi, my names is'
}
const hero = () => {
	return (`
	<span>${content.hi}</span>
	<h1>${classId.name} <br><span>${content.dr}</span></h1>
	<p>${content.desc}<span>${content.pro}</span></p>
	<a href="${content.url}">${content.button}</a>
	`)
}


export default hero;