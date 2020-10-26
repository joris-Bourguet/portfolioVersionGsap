// const onLeaving = (container) => {
//     var tl = gsap.timeline();
//     tl.to('ul.transition li', {
//         duration: .4,
//         scaleY: 1,
//         transformOrigin: "bottom left",
//         stagger: .2
//     }, "-=1");
//     return tl
// }

// const onEnter = (container) => {
//     var tl = gsap.timeline();
//     tl.to('ul.transition li', {
//         duration: .4,
//         scaleY: 0,
//         transformOrigin: "bottom left",
//         stagger: .2
//     });
//     return tl;
// }

const bouncyCircle = new mojs.Shape({
    parent: '.loader',
    shape: 'circle',
    fill: { '#F64040': '#FC46AD' },
    radius: { 20: 80 },
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: 'elastic.inout',
    repeat: 1,
});

const onOnce = (container) => {
    var tl = gsap.timeline();
    tl.to('.loader', {
        delay: 4,
        y: '-100vh',
    })
    bouncyCircle.play()
    return tl;
}


barba.init({
    transitions: [{
        // once({ next }) {
        //     console.log("entering");
        //     onOnce(next.container);
        // },
        // leave: ({ current }) => onLeaving(current.container),
        // enter({ next }) {
        //     console.log(onEnter(next.container));
        // },
    }]
})