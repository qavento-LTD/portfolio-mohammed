import header, { headerLogic } from "./components/header.js";
import meta_Tag from "./components/meta.js";
import hero from "./components/hero.js";
import about from "./components/about.js";
import company from "./components/company.js";
import contect from "./components/contect.js";
import projects from "./components/projects.js";
import footer from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
	
	// meta في head
	document.head.insertAdjacentHTML("beforeend", meta_Tag());
	
	const components = {
		header,
		hero,
		about,
		company,
		projects,
		contect,
		footer
	};
	
	Object.keys(components).forEach((key) => {
		const container = document.getElementById(key);
		if (container) {
			container.insertAdjacentHTML('beforeend', components[key]())
			
		}
	});
	headerLogic()
});