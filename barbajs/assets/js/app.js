import { caroussel } from "./caroussel.js";
import { transitionDePage } from "./menu.js";

caroussel();
transitionDePage();



barba.hooks.enter((data) => {
    caroussel()
});