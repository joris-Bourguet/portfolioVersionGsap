// ===================== Debut du caroussel de la page d'accueil + swipe mobile
function caroussel() {
    const carousselBox = document.querySelector(".caroussel");
    const projectInfoBox = document.querySelector(".projectInfo");
    const slider = document.querySelector(".projects");
    const slides = document.querySelectorAll(".js-slide");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const radio = document.querySelectorAll(".radioSlider");
    const label = document.querySelectorAll('.js-label');
    const titreProject = document.querySelector(".titreProject")
    const descProject = document.querySelector(".descProject")

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    let btnChecked;
    let i;
    let currentSlide;
    let tailleNext = "0px";

    let secondes = -5;
    let interval = 3;

    // =============== Pour les btn radio

    // check le bon btn apres un swipe left or right
    function checkBtn(i) {
        radio[i].checked = true
    }
    //cherche le btn qui est check
    function findBtnChecked() {
        for (let j = 0; j < radio.length; j++) {
            if (radio[j].checked) {
                btnChecked = radio[j].value;
                i = btnChecked
                return btnChecked
            }
        }
    }
    //quand on click sur un btn on vas sur la bonne diapo
    radio.forEach(item => {
        item.addEventListener("click", () => {
            findBtnChecked()
            goToNext(findBtnChecked(), i)
        })
    });


    // =============== Pour swiper téléphone 

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

    // =============== Pour les btn gauche droite 

    // for (i = 0; i < slides.length; i++) {}
    leftBtn.addEventListener('click', () => {
        let tlChangeSlide = gsap.timeline({})
        tlChangeSlide.fromTo(".titreProject", { x: "-20px", opacity: 0, z: "-100px" }, { x: "0px", opacity: 1, duration: 1.1 })
            .fromTo(".descProject", { x: "-20px", opacity: 0 }, { x: "0px", opacity: 1, duration: 1.1 }, "<")
        if (i <= 0) {
            i = slides.length - 1
        } else {
            i--;
        }
        goToNext(i);
        secondes = 1;
    })

    rightBtn.addEventListener('click', () => {
        let tlChangeSlide = gsap.timeline({})
        tlChangeSlide.fromTo(".titreProject", { x: "20px", opacity: 0 }, { x: "0px", opacity: 1, duration: 1.1 })
            .fromTo(".descProject", { x: "20px", opacity: 0 }, { x: "0px", opacity: 1, duration: 1.1 }, "<")
        if (i >= slides.length - 1) {
            i = 0
        } else {
            i++;
        }
        goToNext(i);
        secondes = 1;
    })

    // direction vers la bonne diapo et init tl for change text
    function goToNext(i) {
        let tlChangeSlide = gsap.timeline({})

        currentSlide = slides[i]
        tailleNext = "-" + currentSlide.offsetLeft + "px"
        slider.style.transform = `translateX(${tailleNext})`

        checkBtn(i);
        changeText(i, tlChangeSlide);
        changeColorLabel(tlChangeSlide);
    }


    // Changement de la couleur des labels
    function changeColorLabel(tlChangeSlide) {
        for (let j = 0; j < radio.length; j++) {
            const element = radio[j];
            if (element.checked) {
                tlChangeSlide.fromTo(label[j], {
                    y: "-10px",
                    opacity: 0,
                }, {
                    y: "0px",
                    backgroundColor: "#000025",
                    width: "1em",
                    opacity: 1,
                    duration: .5
                }, 0)
            } else {
                tlChangeSlide.to(label[j], { backgroundColor: "#c50426", height: "8px", width: "2.5em" }, 0)
            }
        }
    }
    // Positionnement de la boite de description 
    let topBoxDesc = carousselBox.offsetTop
    $(projectInfoBox).css("top", topBoxDesc);

    // Changement du text de description
    function changeText(i, tlChangeSlide) {
        let parseI = parseInt(i)
        tlChangeSlide.play()
        switch (parseI) {
            case 0:
                titreProject.innerHTML = `Titre #1`
                descProject.innerHTML = "Bienvenu sur mon portfolio vous retrouverez ici tous mes projets ainsi que mon cv etc..."
                break;
            case 1:
                titreProject.innerHTML = `Titre #2`
                descProject.innerHTML = "Le projet Numéro 2"
                break;
            case 2:
                titreProject.innerHTML = `Titre #3`
                descProject.innerHTML = "Le projet Numéro 3"
                break;

            case 3:
                titreProject.innerHTML = `Titre #4`
                descProject.innerHTML = "Le projet Numéro 4"
                break;

            default:
                titreProject.innerHTML = `Error`
                descProject.innerHTML = `Erreur <a href="">Me contacter</a>`
                break;
        }
    }
    /* changement de diapo auto (3sec) si le courssel n'est pas hover 
    + attend la fin de l'intro*/

    setInterval(() => {
        secondes++;
        if (secondes > interval) {
            rightBtn.click()
            secondes = 1;
        }
    }, 1000);
    $(carousselBox).mouseover(function() {
        secondes = -1;
    });
    $(carousselBox).mouseout(function() {
        secondes = 1;
    });



    // ========== init du caroussel

    // Choix de la diapo de départ
    goToNext(i = 0)
}

// ===================== Fin du caroussel de la page daccueil

export { caroussel }