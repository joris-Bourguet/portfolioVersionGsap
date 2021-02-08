function mousePos() {
    let mouseDiv = document.querySelector('.mouseCircle')
    $(document).mousemove(function(e) {
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // mouseDiv.animate({
        //     top: e.pageY,
        //     left: e.pageX
        // }, 1000)

        $(mouseDiv).css("top", e.pageY);
        $(mouseDiv).css("left", e.pageX);
    })
}

export { mousePos }