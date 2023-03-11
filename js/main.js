// ------------LOADER ON WINDOW LOAD-------------
window.addEventListener('load', ()=>{
    const header = document.getElementById('header');
    const loader = document.querySelector('.loader-wrapper');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', ()=>{
        document.body.removeChild('loader')
    });
});


// ------------ACTIVE NAV CLASSES-------------------
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }else{
        link.classList.remove('active');
    }
});




// -----------NAV DISPLAY ON SCROLL-----------------
window.onscroll = ()=>{
    const header = document.querySelector('header');

    window.scrollY > 0 ? header.classList.add('sticky') :  header.classList.remove('sticky');
};


// ----------------NAV TOGGLE--------------------
const toggleBtn = document.querySelector('.toggle-btn');
const burgers = document.querySelectorAll('.burger');
const collapseNav = document.querySelector('.collapse');


toggleBtn.addEventListener('click',()=>{
    burgers[0].classList.toggle('burger1');
    burgers[1].classList.toggle('burger2')
    burgers[2].classList.toggle('burger3')

    collapseNav.classList.toggle('show-nav');
});  




// -------------------ACCORDIONS-----------------------------
const accordionBtns = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionBtns.forEach(btn=>{
    btn.onclick = (e)=>{
        accordionContents.forEach(content=>{
            if(e.target.nextElementSibling != content && content.classList.contains('active')){
                content.classList.remove('active')
                accordionBtns.forEach(btn=> btn.classList.remove('active'));
            }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle('active');
        btn.classList.toggle('active');
    };
});

window.onclick = (e)=>{
    if(!e.target.matches('.accordion-header')){
        accordionBtns.forEach(btn=> btn.classList.remove('active'));
        accordionContents.forEach(content=> content.classList.remove('active'));
    }
};



//---------------ANIMATION ON SCROLL--------------
AOS.init();




// ----------------FAQ VIEW MORE OR LESS--------------------
const faqBtn = document.querySelector('.less');
const accordionGrid2 = document.querySelector('.grid-2');
const iconDown = document.querySelector('.icon-down');

faqBtn.onclick = ()=>{
    accordionGrid2.classList.toggle('grid-down');
    iconDown.classList.toggle('fa-chevron-up');
};














































































































// .about-learning-process .card-wrapper{
//     position: relative;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     margin-top: 70px;
//     gap: 40px;
//     margin: 3.5rem auto 1rem auto;
//     width: 90%;
// }

// .about-learning-process .card{
//     position: relative;
//     background-color: #fff;
//     /* padding: 0 10px 0 10px; */
//     box-shadow: 0 0 10px rgb(184, 181, 181),
//                 0 20px 10px -10px #767e8b;
//     color: var(--gray-dark);
//     text-align: center;
//     border-radius: 5px;
//     /* width: 300px; */
//     z-index: 5;
//     color: var(--secondary-color);
// }

// /* .about-learning-process .card-wrapper:before{
//     content: '';
//     position: absolute;
//     bottom: 70px;
//     left: 0;
//     height: 2px;
//     width: 100%;
//     background-color: #fff;
// } */

// .about-learning-process .card:before{
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 80px;
//     width: 100%;
//     background: linear-gradient(to right, var(--red), var(--primary-color));
//     border-top-left-radius: 60%;
//     border-top-right-radius: 60%;
//     z-index: -4;
// }

// .about-learning-process .card img{
//     position: relative;
//     position: absolute;
//     top: -40px;
//     left: 20%;
//     width: 120px;
//     height: 100px;
//     /* margin-top: -20px; */
//     /* top: -50%;
//     left: 20%; */
//     border-top-left-radius: 5px;
//     border-top-right-radius: 5px;
//     z-index: -8;
// }



// .contact-us{
//     background: linear-gradient(to right, rgba(0, 3, 39, 0.575), rgba(15, 15, 15, 0.842)),  url('../img//hotel_background2.jpg') no-repeat fixed; 
//     background-size: cover;
//     background-position: center;
//     height: 100%;
//     padding: 30px 0;
//     width: 100%;
//     /* width: 90%;
//     margin: 20px auto; */
//     padding: 20px;
//     /* background-color: rgb(230, 230, 230); */
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// .contact-us h1{
//     color: var(--secondary);
//     font-size: 30px;
// }

// .contact-us p{
//     color: var(--light);
//     margin: 20px 0;
// }

// .contact-wrapper{
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin: 30px;
// }


// .contact-wrapper h1{color: var(--red); font-size: 20px;}

// .contact-wrapper .information{
//     background-color: var(--red);
//     color: var(--light);
//     padding: 10px 20px;
//     border-radius: 5px;
//     box-shadow: 0 0 5px black;
//     width: 40%;
//     position: relative;
// }

// .contact-wrapper .information h1{color: var(--light);}

// .contact-wrapper .information ul li{
//     margin-top: 20px;
// }
// .contact-wrapper .social-links{
//     display: flex;
//     gap: 10px;
//     position: absolute;
//     bottom: 20px;
// }

// .contact-wrapper .social-links img{
//     width: 30px;
//     background-color: var(--light);
//     border-radius: 7px;
//     padding: 5px;
//     transition: 0.2s ease;
// }

// .contact-wrapper .social-links img:hover{
//     transform: scale(1.1);
// }



// .contact-form{
//     width: 70%;
//     padding: 15px 20px;  
//     background-color: var(--light);
//     border-radius: 5px;
//     box-shadow: 0 0 5px var(--grey);
// }
// .contact-form h1{
//     color: var(--dark);
//     font-size: 15px;
//     font-weight: 500;
//     margin: 5px 0 5px 0;
// }

// .contact-form p{
//     color: var(--dark);
// }

// .contact-form input{
//     padding: 10px 20px;
//     border: 1px solid grey;
//     border-radius: 5px;
// }

// .contact-form input:focus,
// .contact-form textarea:focus{
//     border-color: var(--red);
// }

// .contact-form textarea{width: 100%;}

// .contact-form button{
//     background-color: var(--red);
//     padding: 8px 18px;
//     color: var(--light);
//     border-radius: 5px;
//     margin-top: 10px;
//     transition: 0.2s ease;
// }

// .contact-form button:hover{
//     background-color: #830202;
// }


// @media (max-width: 768px){

//     .contact-us{width: 100%;}
//     .contact-wrapper{display: block;}

//     .contact-wrapper .information,
//     .contact-wrapper .contact-form{width: 100%; margin: 20px 0;}

//     .contact-wrapper .information{height: 400px;}
// } */

