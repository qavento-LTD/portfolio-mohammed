const navbar = document.getElementById("navbar");

const menu = document.getElementById("menu");

const  divsnav = document.getElementById("Navdiv");

const btnLang = document.createElement('button');

const btnPage = document.getElementById("btn_page");

const projects = document.getElementById("projectsGrid");

divsnav.append(btnLang)
btnLang.id = "lang-btn";
btnLang.innerHTML = "العربية"


function handlNavbar() {

    const ulElement = document.createElement('ul');
    

    const infoLink = [
        {name: "home", url: "index.html", lang: "homeNav"},
        {name: "about", url: "about.html", lang: "aboutNav"}, 
        {name: "project", url: "project.html", lang: "projectNav"}, 
        {name: "contact" , url: "contact.html", lang: "contactNav"}
    ]

    ulElement.classList = 'flex';
    
    infoLink.forEach((info, index) => {
        const liElement = document.createElement("li");
        const links = document.createElement("a");


        links.href = info.url;
        links.innerText = info.name;
        links.setAttribute("data-lang", info.lang)

        ulElement.appendChild(liElement);
        liElement.appendChild(links)
            if (index == 0 && location.pathname.endsWith("index.html")) {
                liElement.style.background = 'var(--pearl-aqua)';
                links.style.color = 'var(--noyx)'
            }if (index == 1 && location.pathname.endsWith("about.html")) {
                liElement.style.background = 'var(--pearl-aqua)'
                links.style.color = 'var(--noyx)'
            }
            if (index == 2 && location.pathname.endsWith("project.html")) {
                liElement.style.background = 'var(--pearl-aqua)'
                links.style.color = 'var(--noyx)'
            }
            if (index == 3 && location.pathname.endsWith("contact.html")) {
                liElement.style.background = 'var(--pearl-aqua)'
                links.style.color = 'var(--noyx)'
            }
    })

    navbar.appendChild(ulElement);
}

function handlMenu() {
    menu.addEventListener('click', () => {
            if (navbar.style.left == '0px') {
                navbar.style.left = '110%';
                navbar.style.right = '-110%';
            }else{
                navbar.style.left = '0';
                navbar.style.right = '0';
            }
        }
    )
}

handlMenu();
handlNavbar();


const translations = {
    en: {
        heroTitle: "Hi, I'm <span>Mohammed Khaled</span>",
        heroSubtitle: "Frontend Developer & UI/UX Designer",
        heroDesc: "I build clean, modern, and responsive web interfaces focused on performance and user experience.",
        viewWork: "View My Work",
        contact: "download CV",
        sectionAbout: 'About Me',
        aboutPargraph: 'I am a passionate frontend developer dedicated to crafting functional and visually appealing websites. I focus on writing structured, clean HTML/CSS and interactive JavaScript code',
        logo: '<span>Qavneto</span>',
        homeNav: 'home',
        aboutNav: 'about',
        projectNav: 'project',
        contactNav: 'contact'
    },

    ar: {
        heroTitle: "مرحبًا، أنا <span>محمد خالد</span>",
        heroSubtitle: "مطور واجهات أمامية ومصمم UI/UX",
        heroDesc: "أقوم بتطوير مواقع حديثة وسريعة ومتجاوبة مع جميع الأجهزة مع التركيز على تجربة المستخدم.",
        viewWork: "أعمالي",
        contact: "السيرة الذاتيه",
        sectionAbout: 'عني',
        aboutPargraph: 'أنا مطور Frontend شغوف بإنشاء مواقع ويب عملية وتصميمها بصرياً بشكل مميز. أهتم بكتابة كود HTML/CSS منظم ونظيف، وتطوير تفاعلات باستخدام JavaScript.',
        logo: '<span>كافينتو</span>',
        homeNav: 'القائمه الرئيسيه',
        aboutNav: 'عني',
        projectNav: 'مشاريع',
        contactNav: 'التواصل'
    }
};

const langBtn = document.getElementById("lang-btn");


function changeLanguage(lang) {

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }

    });
    localStorage.setItem("lang", lang);

    langBtn.textContent = lang === "en" ? "العربية" : "English";
}


langBtn.addEventListener("click", () => {

    if ( "en" === localStorage.getItem("lang")) {
        localStorage.setItem("lang", "ar");
        changeLanguage(localStorage.getItem("lang"));
    } else {
        localStorage.setItem("lang", "en");
        changeLanguage(localStorage.getItem("lang"));
    }

});

changeLanguage(localStorage.getItem("lang"))

const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

elements.forEach(element => {
    observer.observe(element);
});


    btnPage.addEventListener('click', () => {
        window.location.href = "contact.html";
    })


async function getData(){
    const response = await fetch("/Client/assets/project.json")
     const data = await response.json();
     return data;
}


// const project = `
//         <article class="project-card">
//           <div class="">
//             <!-- صورة المشروع 1 -->
//             <img src="" alt="E-Commerce Project Preview">
//           </div>
//           <div class="project-info">
//             <h3>E-Commerce Interface</h3>
//             <p>Modern online store layout with responsive navigation and dynamic cart design.</p>
//             <div class="project-tags">
//               <span>HTML</span>
//               <span>CSS</span>
//               <span>JS</span>
//             </div>
//             <a href="#" class="project-link">View Project &rarr;</a>
//           </div>
//         </article>`

// projects.appendChild(project)