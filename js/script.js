// Enhanced script.js for portfolio while preserving old functionality

// Disable certain default browser behaviors
// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//        event.preventDefault();
//     }
//     if(event.key == "F12"){
//        event.preventDefault();
//     }
// });

// document.addEventListener('contextmenu', 
//      event => event.preventDefault()
// );

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Class active changes depending on section
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            nav_links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar link scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .service-container , .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content , #contact-heading', { origin: 'right' });

// Typed.js for dynamic text
const typed = new Typed('.multiple-text', {
    strings: ['AI Developer', 'Researcher', 'Fintech Innovator', 'Sustainability Advocate'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to toggle description for experiences
function toggle_discription(id) {
    let experiences = [
        "Stealth Mode AI Startup",
        "FITFLEX",
        "Bio-AI Lab",
        "Teeny Coders",
        "Dawlance",
        "10 Pearls",
        "National Cybercrime Forensics Lab",
        "GlobalShala",
        "Mindstorm Studios"
    ];

    experiences.forEach((experience, index) => {
        let element = document.getElementById(experience);
        if (element) {
            element.style.display = (id === index + 1) ? "block" : "none";
            document.getElementById(index + 1).style.color = (id === index + 1) ? "#0ef" : "white";
        }
    });
}

// Fetch and display GitHub projects dynamically
async function get_repos() {
    let result = await fetch("https://api.github.com/users/Azka1212/repos");
    let response = await result.json();
    return response;
}

(async function () {
    try {
        let repos = await get_repos();
        console.log(repos);
        for_best_projects(repos);
        for_other_projects(repos);
    } catch (err) {
        console.error(err.message);
    }
})();

// Display best projects
function for_best_projects(data) {
    const container = document.getElementById("best_projects");
    data.forEach((result) => {
        const content = `
        <div class="portfolio-box">
            <img src="./images/me.jpeg" alt="" />
            <div class="portfolio-layer">
                <h4>${result.name}</h4>
                <p>${result.description ? result.description : 'No description available'}</p>
                <a id="latest_projects_anchor" href="${result.html_url}"> <i class="bx bx-link-external"></i></a>
            </div>
        </div>`;

        if (result.description) {
            container.innerHTML += content;
        }
    });
}

// Display other projects
function for_other_projects(data) {
    const container = document.getElementById("other_projects");
    data.forEach((result) => {
        const content = `
        <div class="portfolio-box">
            <img src="./images/projects_placeholder.png" alt="" />
            <div class="portfolio-layer">
                <h4>${result.name}</h4>
                <p>${result.description ? result.description : 'No description available'}</p>
                <a id="latest_projects_anchor" href="${result.html_url}"><i class="bx bx-link-external"></i></a>
            </div>
        </div>`;

        if (result.description) {
            container.innerHTML += content;
        }
    });
}

// Contact form handler (future implementation)
const sendMail = () => {
    console.log("Sending email functionality will be implemented here");
};
