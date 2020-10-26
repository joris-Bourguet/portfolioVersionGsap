const menuBtn = document.querySelector('.menu-btn')
const menuitems = document.querySelector('.menu-items')
const menuItem = document.querySelectorAll('.menu-item')
const header = document.querySelector('#header')
const navTop = document.querySelector('#header nav')


// rajouter au fur et à mesure si des éléments se rajoute au header 

headerSize = navTop.clientHeight;
$(header).css('height', headerSize);


menuBtn.addEventListener('click', () => {
    toggle();
})


menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('open')) {
            toggle();
        }
    })
})

function toggle() {
    menuBtn.classList.toggle("open");
    menuitems.classList.toggle("open");
}