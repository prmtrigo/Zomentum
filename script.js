const ButtonMobile = document.getElementById('ToolBar');

ButtonMobile.addEventListener('click',toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const Nav = document.getElementById('Nav2');
    Nav.classList.toggle('active')
}

ButtonMobile.addEventListener('click',toggleMenu);
ButtonMobile.addEventListener('touchstart',toggleMenu);