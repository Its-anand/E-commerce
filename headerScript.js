function openMenu() {
    let nav = document.getElementById('navbar');
    if (nav.style.height === "0px" || nav.style.height === "") {
        nav.style.height = '15rem';
    } else {
        nav.style.height = '0';
    }
}
