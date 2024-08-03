let arrows = document.querySelectorAll('.arrow');

function rotateArrowUp(event) {
    let arrow = event.target;
    let menu = arrow.closest('h2').nextElementSibling;

    // Close all other menus
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.add('hidden');
    });
    
    // Reset all arrows
    arrows.forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
        arrow.removeEventListener('click', rotateArrowDown);
        arrow.addEventListener('click', rotateArrowUp);
    });

    // Open the clicked menu and rotate its arrow
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
