addEventListener('DOMContentLoaded', () => {
    
    const iconMenuMovil = document.querySelector('.icon-menu-movil');
    const menuCollapse = document.querySelector('.menu-collapse');
    const btnBackground = document.querySelector('.btn-bg');
    const btnColor = document.querySelector('.btn-color');
    const menu = document.querySelector('.menu');
    const menuOptionsMovil = document.querySelector('.menu-options-collapse');
    const menuOptionsWeb = document.querySelector('.menu-options');
    const bgColor = document.querySelector('.bg');
    const textColor = document.querySelector('.textColor');
    const iconCopyBG = document.querySelector('#background');
    const iconCopyC = document.querySelector('#text');

    let toogle = false;
    let colorBg = 'rgb(86, 197, 127)';
    let textC = '#fff';
    bgColor.parentElement.style.background = colorBg;
    textColor.parentElement.style.background = textC;

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
        const color = randomColor();
        menu.style.backgroundColor = color;
        bgColor.textContent = color;
        bgColor.parentElement.style.background = color;
        colorBg = color;
    }

    const changeTextColor = () => {
        const color = randomColor();
        menuOptionsMovil.style.color = color;
        menuOptionsWeb.style.color = color;
        textColor.textContent = color;
        textColor.parentElement.style.background = color;
        textC = color;
    }

    const copyColor = (color) => {
        navigator.clipboard.writeText(color);
    }

    iconMenuMovil.addEventListener('click', toggleMenu);
    btnBackground.addEventListener('click', changeBacground);
    btnColor.addEventListener('click', changeTextColor);
    iconCopyBG.addEventListener('click', () => copyColor(colorBg));
    iconCopyC.addEventListener('click', () => copyColor (textC));
});