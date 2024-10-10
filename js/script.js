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


// toggle icone navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick    =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// class active changes depending on section 
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top<offset +height){
            nav_links.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+id+']').classList.add('active')
            })
        }
    })

    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100)
    header.classList.toggle('sticky' , window.scrollY > 100)

    // remove toggleicon and navbar when click navbar link scroll

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


// scrool reveal 
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , .heading' , {origin:'top'});
ScrollReveal().reveal('.home-img , .service-container , .portfolio-box' , {origin:'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img' , {origin:'left'});
ScrollReveal().reveal('.home-content p , .about-content , #contact-heading' , {origin:'right'});


// typed js
const typed = new Typed('.multiple-text' , {
    strings:['Developer' , 'Designer' , 'Blogger'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const sendMail = ()=>{
    // const mainAddress = "khalihaider9@gmail.com"
    // const subject = encodeURIComponent("this is my subject")

    console.log("have to send email");
}

function toggle_discription(id){
    var a = document.getElementById("Switch Communications");
    var b = document.getElementById("Teeny Coders");
    var c = document.getElementById("Dawlance");
    var d = document.getElementById("10 Pearls");
    var e = document.getElementById("National Cybercrime Forensics Lab");
    var f = document.getElementById("GlobalShala");
    var g = document.getElementById("Mindstorm Studios");
    
    if(id == 1){
        a.style.display="block";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";

        document.getElementById(1).style.color = "#0ef";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "white";
    }
    if(id == 2){
        a.style.display="none";
        b.style.display="block";
        c.style.display="none";
        d.style.display="noe";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "#0ef";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "white";
    }
    if(id == 3){
        a.style.display="none";
        b.style.display="none";
        c.style.display="block";
        d.style.display="noe";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "#0ef";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "white";
    }
    if(id == 4){
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="block";
        e.style.display="none";
        f.style.display="none";
        g.style.display="none";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "#0ef";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "white";
    }
    if(id == 5){
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="block";
        f.style.display="none";
        g.style.display="none";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "#0ef";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "white";
    }
    if(id == 6){
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="none";
        f.style.display="block";
        g.style.display="none";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "#0ef";
        document.getElementById(7).style.color = "white";
    }
    if(id == 7){
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
        e.style.display="none";
        f.style.display="none";
        g.style.display="block";

        document.getElementById(1).style.color = "white";
        document.getElementById(2).style.color = "white";
        document.getElementById(3).style.color = "white";
        document.getElementById(4).style.color = "white";
        document.getElementById(5).style.color = "white";
        document.getElementById(6).style.color = "white";
        document.getElementById(7).style.color = "#0ef";
    }
}
