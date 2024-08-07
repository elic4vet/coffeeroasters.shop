let arrows = document.querySelectorAll('.arrow');
let menu = document.querySelectorAll('.menu');

function rotateArrowUp(event) {
    let arrow = event.target;
    let menu = arrow.closest('h2').nextElementSibling;

    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.add('hidden');
    });

    arrows.forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
        arrow.removeEventListener('click', rotateArrowDown);
        arrow.addEventListener('click', rotateArrowUp);
    });

    arrow.style.transform = 'rotate(180deg)';
    menu.classList.remove('hidden');
    arrow.removeEventListener('click', rotateArrowUp);
    arrow.addEventListener('click', rotateArrowDown);
}

function rotateArrowDown(event) {
    let arrow = event.target;
    let menu = arrow.closest('h2').nextElementSibling;

    // Hide the clicked menu and reset its arrow
    arrow.style.transform = 'rotate(0deg)';
    menu.classList.add('hidden');
    arrow.removeEventListener('click', rotateArrowDown);
    arrow.addEventListener('click', rotateArrowUp);
}


arrows.forEach(arrow => {
    arrow.addEventListener('click', rotateArrowUp);
});


 
function changeSelectedMenu(event) {
    let menu = event.target;
    menu.style.backgroundColor = 'var(--color-selected)';
    menu.style.color = 'var(--color-selected-text)';
}

menu.forEach(menu => { 
    menu.addEventListener('click', changeSelectedMenu);
});


