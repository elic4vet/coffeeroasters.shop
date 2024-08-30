let arrows = document.querySelectorAll('.arrow');
let menu = document.querySelectorAll('.menu');
let selectedColor = '#0E8784';
let selectedTextColor = 'white';

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
    let menuItem = event.target.closest('.menu_items');
    if (menuItem) {
        document.querySelectorAll('.menu_item').forEach(item => {
            item.style.backgroundColor = ''; 
            item.style.color = ''; 
        });
        menuItem.style.backgroundColor = selectedColor;
        menuItem.style.color = selectedTextColor;
    }
}

document.querySelectorAll('.menu_items').forEach(item => {
    item.addEventListener('click', changeSelectedMenu);
});