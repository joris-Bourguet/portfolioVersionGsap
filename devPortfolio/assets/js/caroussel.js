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

    let title = {
        portfolio: {
            "hash": "#Portfolio_vuejs",
            "titre": "Portfolio",
            "description": "Site de websitedev"
        },
        pole_mecanique_karting_ales: {
            "hash": "#pole-mecanique-karting-ales",
            "titre": "Pole Mécanique Karting Ales",
            "description": "Le site du pole mécanique karting d'ales a été remis au goût du jours"
        },
        hotel_equipe_sauze: {
            "hash": "#hotel-equipe-sauze",
            "titre": "Hotel L'Équipe",
            "description": "Site de L'hotel L'équipe"
        },
        websitedev: {
            "hash": "#websitedev",
            "titre": "websitedev.fr",
            "description": "Site de websitedev"
        }
    }
    if (!location.hash) {
        location.hash = title.portfolio.hash
    } else {
        changeInfo(location.hash)
    }

    window.addEventListener('hashchange', (e) => {
        changeInfo(location.hash)

    })

    function changeInfo(hash) {
        if (hash == title.portfolio.hash) {
            projectTitle.textContent = title.portfolio.titre
            projectDescription.textContent = title.portfolio.description
        } else if (hash == title.pole_mecanique_karting_ales.hash) {
            projectTitle.textContent = title.pole_mecanique_karting_ales.titre
            projectDescription.textContent = title.pole_mecanique_karting_ales.description
        } else if (hash == title.hotel_equipe_sauze.hash) {
            projectTitle.textContent = title.hotel_equipe_sauze.titre
            projectDescription.textContent = title.hotel_equipe_sauze.description
        } else if (hash == title.websitedev.hash) {
            projectTitle.textContent = title.websitedev.titre
            projectDescription.textContent = title.websitedev.description
        } else {
            location.hash = title.portfolio.hash
        }
    }

}

export { caroussel }