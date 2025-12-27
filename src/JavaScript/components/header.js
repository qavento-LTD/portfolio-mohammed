const classes = {
	container: 'container',
	logo: 'logo',
	menu: 'menu',
	bg_blur: 'bgblur',
};

const srcImg = {
	url: "/public/img/logo.png",
	alt: "img logo website",
};

const links = ['about', 'company', 'projects', 'experience', 'contact'];

const allLinks = links.map(name => `<li><a href="#${name}">${name}</a></li>`).join('');

export function headerLogic() {
	let container;
	container = document.querySelector('.container');
	let menu;
	menu = document.querySelector('.menu');
	let bg_blur;
	bg_blur = document.querySelector('.bgblur');
	let nav;
	nav = document.querySelector('nav');
	
	
	menu.addEventListener('click', () => {
		nav.classList.toggle('open');
		bg_blur.classList.toggle('open');
		menu.classList.toggle('open');
	});
	
	
};
const header = () => `
  <div class="${classes.bg_blur}"></div>
  <div class="${classes.container}">
    <div class="${classes.logo}">
      <img src="${srcImg.url}" alt="${srcImg.alt}">
    </div>
    <nav>
      <ul>${allLinks}</ul>
    </nav>
    <div class="${classes.menu}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
`;

export default header;