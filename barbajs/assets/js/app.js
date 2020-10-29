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
    top: "-100%",

}, {
    top: "0%",
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
$(document).on("click", "a", function() {
    menuTl.reversed(!menuTl.reversed());
    one.classList.toggle('toggle')
    two.classList.toggle('toggle')
});