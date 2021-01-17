import { caroussel } from "./caroussel.js";
import { transitionDePage } from "./menu.js";
$(document).ready(function() {
    caroussel();
    transitionDePage();

    barba.hooks.enter((data) => {
        caroussel()
    });
});