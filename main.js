// all veriabls 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".showMenu li a")
const togglePlay = document.querySelector(".toggle");
const audioQuran = document.querySelector("audio");
const titleAudio = document.querySelector(".title-audio h3");
const reveal = document.querySelector(".reveal");
const menu = document.querySelector(".menu");
const showMenu = document.querySelector('.showMenu');
const mainEL = document.querySelector(".main");
const scrollTop = document.querySelector(".scrollTop");
const sliders = document.querySelectorAll(".slider");
const slidebtns = document.querySelectorAll(".btn-radio");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const numberOfSlide = sliders.length;
let slideNumber = 0;

// sliders next start //
nextBtn.addEventListener("click", () => {

    sliders.forEach(slide => {
        slide.classList.remove("active");
    })

    slidebtns.forEach( slidebtn => {
        slidebtn.classList.remove("active");
    })

    slideNumber++;

    if(slideNumber > (numberOfSlide -1)) {
        slideNumber = 0;
    }

    clearInterval(playSliders);
    sliders[slideNumber].classList.add("active");
    slidebtns[slideNumber].classList.add("active");
})
// sliders next end //

// sliders preveis start //
prevBtn.addEventListener("click", () => {

    sliders.forEach( slider => {
        slider.classList.remove("active");
    })

    slidebtns.forEach( slidebtn => {
        slidebtn.classList.remove("active");
    })

    slideNumber--;

    if(slideNumber < 0) {
        slideNumber = numberOfSlide - 2;
    }

    clearInterval(playSliders)
    sliders[slideNumber].classList.add("active");
    slidebtns[slideNumber].classList.add("active");
})

// sliders preveis end //

// start btnsliders menual // 
let currentNumber = 1;
const menualBtn = function(menual){

    sliders.forEach(slider => {
        slider.classList.remove("active");

        slidebtns.forEach(slidebtn => {
            slidebtn.classList.remove("active");
        });
    });

    sliders[menual].classList.add("active");
    slidebtns[menual].classList.add("active");
}

slidebtns.forEach((slidebtn, i) => {
    slidebtn.addEventListener("click", () => {
        menualBtn(i);
        currentNumber = i;
        clearInterval(playSliders);
    });
});
// end btnsliders menual //

// sliders autoplay start //
let playSliders;

const repeater = () => {
    playSliders = setInterval( () => {
        sliders.forEach(slide => {
            slide.classList.remove("active");
        })
    
        slidebtns.forEach( slidebtn => {
            slidebtn.classList.remove("active");
        })
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlide -1)) {
            slideNumber = 0;
        }
    
        sliders[slideNumber].classList.add("active");
        slidebtns[slideNumber].classList.add("active");
    }, 4000)
}

repeater();
// sliders autoplay end //

// scroll top start //

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("active", window.scrollY > 400);
})

scrollTop.addEventListener("click", () => {
   window.scrollTo({
    top: 0,
    // behavior: "smooth",
   })
})

// scroll top end //

//responsive navigation start //
menu.addEventListener("click", () => {
   menu.classList.toggle("active");
   if(menu.classList.contains("active")) {
      showMenu.style.display = 'block';
   } else {
     showMenu.style.display = 'none';
   }
})
//responsive navigation end //

// toggle play audio start //
togglePlay.addEventListener("click", () => {
    togglePlay.classList.toggle("show");
    if(togglePlay.classList.contains('show')) {
        audioQuran.pause();
        titleAudio.innerText = "Play Audio";
    } else {
        audioQuran.play();
        titleAudio.innerText = "Pause Audio";
    }
})

audioQuran.play();

audioQuran.addEventListener("ended", () => {
    audioQuran.play();
})

// toggle play audio end //

// active section and nav links start // 

window.addEventListener("scroll", () => {
   let id = '';

   sections.forEach(section => {
     const secTop = section.offsetTop;

     if (scrollY >= secTop - 65) {
        id = section.getAttribute("id");
     }
   });

   navLinks.forEach(navlink => {
     navlink.classList.remove("active");
     document.querySelector('.showMenu li a[href*=' + id +']').classList.add("active");
   })
});

// active section and nav links end // 

// animations scroll reveal start //
const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

srTop.reveal('.home', {delay: 300})
srTop.reveal('.text', {delay: 100})
srTop.reveal('.img', {delay: 300})
srTop.reveal('.sliders', {delay: 300})



const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about img', {delay: 300})
srLeft.reveal('.prev', {delay: 300})


const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.about-text', {delay: 300})
srRight.reveal('.next', {delay: 300})
 
//animations scroll reveal end //
