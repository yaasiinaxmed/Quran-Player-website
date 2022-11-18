const togglePlay = document.querySelector(".toggle");
const audioQuran = document.querySelector("audio");
const titleAudio = document.querySelector(".title-audio h3");
const reveal = document.querySelector(".reveal");
const menu = document.querySelector(".menu");
const showMenu = document.querySelector('.showMenu');
const mainEL = document.querySelector(".main");
const scrollTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("active", window.scrollY > 400);
})

scrollTop.addEventListener("click", () => {
   window.scrollTo({
    top: 0,
    behavior: "smooth",
   })
})

menu.addEventListener("click", () => {
   menu.classList.toggle("active");
   if(menu.classList.contains("active")) {
      showMenu.style.display = 'block';
   } else {
     showMenu.style.display = 'none';
   }
})

// mainEL.addEventListener("click", () => {
//     if(menu.classList.contains("active")) {
//         showMenu.style.display = 'none';
//      } else {
//        showMenu.style.display = 'none';
//     }
//     menu.classList.remove('active');
// })


togglePlay.addEventListener("click", () => {
    togglePlay.classList.toggle("show");
    if(togglePlay.classList.contains('show')) {
        audioQuran.pause();
        titleAudio.innerText = "Qur'an Play";
    } else {
        audioQuran.play();
        titleAudio.innerText = "Qur'an Pause";
    }
})

audioQuran.addEventListener("ended", () => {
    audioQuran.play();
})

const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

srTop.reveal('.home', {delay: 300})
srTop.reveal('.text', {delay: 100})
srTop.reveal('.img', {delay: 300})


const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about img', {delay: 300})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.about-text', {delay: 300})

