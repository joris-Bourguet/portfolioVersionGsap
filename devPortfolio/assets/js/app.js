import { caroussel } from "./caroussel.js";
import { transitionDePage } from "./menu.js";
import { mousePos } from "./mouse.js";


$(document).ready(function() {
    caroussel();
    transitionDePage();
    mousePos();

    barba.hooks.enter((data) => {
        caroussel()
    });
});