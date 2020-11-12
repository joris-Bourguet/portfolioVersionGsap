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