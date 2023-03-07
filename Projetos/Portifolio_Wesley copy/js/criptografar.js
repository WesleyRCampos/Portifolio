const menubtn = document.getElementById('menu-btn');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
menubtn.addEventListener('click', toggleMenu);