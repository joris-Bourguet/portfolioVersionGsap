// ===================== Debut du caroussel de la page d'accueil + swipe mobile
function caroussel() {
    let titreProject = document.querySelector(".js-projectTitle");
    let descProject = document.querySelector(".js-projectDescription");

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const slider = document.querySelector(".projects")
    const slides = document.querySelectorAll(".js-slide")
    const leftBtn = document.querySelector(".left")
    const rightBtn = document.querySelector(".right")

    let radio = document.querySelectorAll(".radioSlider")
    let btnChecked;
    let i;
    let currentSlide;
    let tailleNext = "0px";

    // Pour les btn radio

    function findBtnChecked() {
        for (let j = 0; j < radio.length; j++) {
            if (radio[j].checked) {
                btnChecked = radio[j].value;
                i = btnChecked
                return btnChecked, i
            }
        }
    }

    radio.forEach(item => {
        item.addEventListener("click", () => {
            findBtnChecked()
            goToNext(findBtnChecked())
            console.log(findBtnChecked(), i);
        })
    });


    // Pour swiper téléphone 

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

    // Pour les btn gauche droite 

    // for (i = 0; i < slides.length; i++) {}

    leftBtn.addEventListener('click', () => {
        let tlChangeText = gsap.timeline({})
        tlChangeText.fromTo(".projectInfo", { x: "-100px", opacity: 0, z: "-100px" }, { x: "0px", opacity: 1, scale: 1, duration: 1.2 })

        if (i <= 0) {
            i = slides.length - 1
        } else {
            i--;
        }
        goToNext(i);
    })


    rightBtn.addEventListener('click', () => {
        let tlChangeText = new gsap.timeline({})
        tlChangeText.fromTo(".projectInfo", { x: "50px", opacity: 0 }, { x: "0px", opacity: 1 })
        if (i >= slides.length - 1) {
            i = 0
        } else {
            i++;
        }
        goToNext(i, tlChangeText);
    })

    function goToNext(i) {
        let tlChangeText = gsap.timeline({})

        currentSlide = slides[i]
        tailleNext = "-" + currentSlide.offsetLeft + "px"
        slider.style.transform = `translateX(${tailleNext})`

        console.log(btnChecked, i);
        changeText(i, tlChangeText);
    }

    // Choix de la diapo de départ
    goToNext(i = 0)

    // Changement du text de description

    function changeText(i, tlChangeText) {
        tlChangeText.play()
        switch (i) {
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

            case 4:
                titreProject.innerHTML = `Titre #5`
                descProject.innerHTML = "Le projet Numéro 5"
                break;

            default:
                titreProject.innerHTML = `Error`
                descProject.innerHTML = `Erreur <a href="">Me contacter</a>`
                break;
        }
    }
}
// ===================== Fin du caroussel de la page daccueil

export { caroussel }