function mousePos() {
    const taillePageX = window.innerWidth
    const taillePageY = window.innerHeight

    console.log(taillePageX, taillePageY);

    let mouseDiv = document.querySelector('.mouseCircle')
    $(document).mousemove(function(e) {
        $(mouseDiv).css("top", e.pageY);
        $(mouseDiv).css("left", e.pageX);

        // empecher la div de dépasser du body (beta)
        if (e.pageY < 20) {
            $(mouseDiv).css("top", 20);
        }
        if (e.pageY > taillePageY - 30) {
            $(mouseDiv).css("top", taillePageY - 30);
        }
        if (e.pageX < 20) {
            $(mouseDiv).css("left", 20);
        }
        if (e.pageX > taillePageX - 20) {
            $(mouseDiv).css("left", taillePageX - 20);
        }
    })
}

export { mousePos }