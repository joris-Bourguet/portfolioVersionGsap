import { caroussel } from "./caroussel.js";
import { transitionDePage } from "./menu.js";

caroussel();

transitionDePage();

barba.init({
    cacheIgnore: true,
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
barba.hooks.enter((data) => {
    caroussel()
});