function freeez() {
    var a = 9000000;
    while(a--) {}
}

function write(text, id) {
    var resultEl = document.getElementById(id);
    resultEl.innerHTML += text.concat('\n');
}
