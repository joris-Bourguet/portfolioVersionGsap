const toggleBtn = document.querySelector('.toggle-btn')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

var menuTl = gsap.timeline()

menuTl.to(".one", 0.8, {
    y: 6,
    rotation: 45,
    ease: "power4.in"
});

menuTl.to(".two", 0.8, {
    y: -6,
    rotation: -45,
    ease: "power4.in",
    delay: -0.8
});

menuTl.fromTo(".menu", 1, {
    top: "-100%",

}, {
    top: "0%",
    ease: "power4.in"
}, "-=.5");

menuTl.staggerFrom(".menu ul li", 1, {
    x: -200,
    opacity: 0,
    ease: "back.out(1)"
}, 0.3);

menuTl.reverse();

$(toggleBtn).on("click", function() {
    menuTl.reversed(!menuTl.reversed());
    one.classList.toggle('toggle')
    two.classList.toggle('toggle')
    console.log("test");
});
$(document).on("click", "a", function() {
    menuTl.reversed(!menuTl.reversed());
});