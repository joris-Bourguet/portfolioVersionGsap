function caroussel() {
    const projectDescription = document.querySelector('.projectInfo .descProject')
    const projectTitle = document.querySelector('.projectInfo .titreProject')
    const projectInfo = document.querySelector('.projectInfo')

    const carousselBox = document.querySelector('.caroussel')
    var offset = $(carousselBox).offset();
    var top = offset.top;

    $(projectInfo).css("top", top + "px");

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        speed: 400,
        loop: true,
        effect: "slide",
        hashNavigation: {
            watchState: true
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "bullets", // ou bullets ou progressbar
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        a11y: {
            prevSlideMessage: 'Image précédent',
            nextSlideMessage: 'Image suivante',
        },
    })


    window.addEventListener('hashchange', (e) => {
        changeInfo(location.hash)

    })

    function changeInfo(hash) {
        if (hash == "#websitedev") {
            projectTitle.textContent = "test"
        }
    }

    let title = {
        "pole-mecanique-karting-ales": "Titre pole",
        "hotel-equipe-sauze": "Titre hotel",
        "websitedev": "Titre wsd",
    }
}

export { caroussel }