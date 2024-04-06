function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    console.log(elem);
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        console.log(pos);
        if (pos == 800) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
        }
    }
}

window.addEventListener("load", myMove);