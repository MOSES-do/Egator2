
const navOpen = document.querySelector('#open__nav-btn');
const navClose = document.querySelector('#close__nav-btn');

const nav = document.querySelector('.nav__items');


const openNav = () => {
    navOpen.style.display = "none";
    navClose.style.display = "inline-block";
    nav.style.display = "flex";
}

navOpen.addEventListener("click", openNav);

const closeNav = () => {
    navOpen.style.display = "inline-block";
    navClose.style.display = "none";
    nav.style.display = "none";
}

navClose.addEventListener("click", closeNav);


//Close navbar onclick 
if (document.body.clientWidth < 1200) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}


//Respond to keyboard events (Global events)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeNav();
    }
});


//change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0); //scroll more than zero pixel class takes effect on the nav
});





//SWIPER JS (gallery section)

const swiper = new Swiper(".mySwiper", {

    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // phones
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // tablets
        600: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // desktop
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        2030: {
            slidesPerView: 4,
            spaceBetween: 60
        }
    },
});
