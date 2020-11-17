caroussel();
transitionDePage();

function transitionDePage() {
    //Debut de la timeline menu
    const toggleBtn = document.querySelector('.toggle-btn')
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')

    var menuTl = gsap.timeline()

    menuTl.to(".one", 0.8, {
        width: "60%",
        left: "8px",
        y: 6,
        rotation: 45,
        ease: "power4.in",
        backgroundColor: "#ff4f4f"
    });

    menuTl.to(".two", .8, {
        width: "60%",
        left: "8px",
        y: -6,
        rotation: -45,
        ease: "power4.in",
        delay: -0.8,
        backgroundColor: "#ff4f4f"
    });

    menuTl.fromTo(".menu", .8, {
        top: "-100vh",

    }, {
        top: "0vh",
        ease: "power4.in"
    }, "-=.5");

    menuTl.staggerFrom(".menu ul li", .8, {
        x: -200,
        opacity: 0,
        ease: "back.out(1)"
    }, 0.2);

    menuTl.reverse();

    $(toggleBtn).on("click", function() {
        menuTl.reversed(!menuTl.reversed());
        one.classList.toggle('toggle')
        two.classList.toggle('toggle')
    });
    $(document).on("click", ".menu a", function() {
        menuTl.reversed(!menuTl.reversed());
        one.classList.toggle('toggle')
        two.classList.toggle('toggle')
    });


    //Debut des transitions de pages

    function delay(n) {
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n)
        })
    }

    const onBeforeOnce = (container) => {
        var tlLoader = new gsap.timeline({
            repeat: 1
        })
        tlLoader
            .staggerFromTo('.dot', 0.5, {
                    y: 0,
                    autoAlpha: 0
                }, {
                    y: 20,
                    autoAlpha: 1,
                    ease: Back.easeInOut
                },
                0.1
            )
            .fromTo('#loader', 0.3, {
                    autoAlpha: 1,
                    scale: 1
                }, {
                    autoAlpha: 0,
                    ease: Power0.easeNone,
                },
                1
            );
        return tlLoader;
    }

    const onOnce = (container) => {
        var tl = new gsap.timeline({ default: { ease: "power1.out" } })

        tl.to('.text', { y: '0%', duration: 1, stagger: 0.5 }, "+=2.5")
            .to('.sliderAnimation', { y: '-100%', duration: 1.5, delay: 0.5 })
            .to('.intro', { y: '-100%', duration: 1 }, "-=1")
        return tl;
    }


    barba.init({
        cacheIgnore: true,
        sync: true,
        transitions: [{
            name: 'hello',
            async beforeOnce({ next }) {
                onBeforeOnce(next.container)
            },
            async once({ next }) {
                onOnce(next.container);
            }
        }]
    })
    barba.hooks.enter((data) => {
        caroussel()
    });
}


//Debut du caroussel de la page d'accueil + swipe mobile
function caroussel() {
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const slider = document.querySelector(".projects")
    const slides = document.querySelectorAll(".js-slide")
    const leftBtn = document.querySelector(".left")
    const rightBtn = document.querySelector(".right")

    let i;
    let currentSlide;

    let tailleNext = "0px";

    slider.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    slider.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX <= touchstartX) {
            rightBtn.click()
        }

        if (touchendX >= touchstartX) {
            leftBtn.click()
        }

        goToNext(i)
    }

    for (i = 0; i < slides.length; i++) {}

    leftBtn.addEventListener('click', () => {
        if (i <= 0) {
            i = slides.length - 1
        } else {
            i--;
        }
        goToNext(i);
    })


    rightBtn.addEventListener('click', () => {
        if (i >= slides.length - 1) {
            i = 0
        } else {
            i++;
        }
        goToNext(i);
    })


    function goToNext(i) {
        currentSlide = slides[i]

        tailleNext = "-" + currentSlide.offsetLeft + "px"
        slider.style.transform = `translateX(${tailleNext})`
    }

    // Choix de la diapo de départ
    goToNext(i = 0)
        //Fin du caroussel de la page daccueil
}