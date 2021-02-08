function mousePos() {
    let mouseDiv = document.querySelector('.mouseCircle')
    $(document).mousemove(function(e) {
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        mouseDiv.animate({
            top: e.pageY,
            left: e.pageX
        }, 1000)
    })
}

export { mousePos }