addEventListener('DOMContentLoaded', () => {
    
    const iconMenuMovil = document.querySelector('.icon-menu-movil');
    const menuCollapse = document.querySelector('.menu-collapse');
    const btnBackground = document.querySelector('.btn-bg');
    const btnColor = document.querySelector('.btn-color');
    const menu = document.querySelector('.menu');
    const menuOption = document.querySelectorAll('.option');

    let toogle = false;

    const randomColor = () =>{
        const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
        return color;
    }

    const toggleMenu = () =>{
        toogle = !toogle;
        let show = toogle ? 'block' : 'none';
        menuCollapse.style.display = show;
        menuCollapse.classList.add('animation-menu-show');
    }

    const changeBacground = () => {
        menu.style.backgroundColor = randomColor();
    }

    const changeTextColor = () => {
        console.log(randomColor());
    }

    iconMenuMovil.addEventListener('click', toggleMenu);
    btnBackground.addEventListener('click', changeBacground);
    btnColor.addEventListener('click', changeTextColor);
    
});