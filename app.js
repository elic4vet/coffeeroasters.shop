let arrows = document.querySelectorAll('.arrow');
let menu = document.querySelectorAll('.menu');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');

let selectedOptions = {
    drinkType: '',
    coffeeType: '',
    quantity: '',
    grind: '',
    delivery: ''
};

const selectedColor = 'var(--dark-cyan)';
const selectedTextColor = 'var(--light-cream)';

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
        if (menuItem.classList.contains('selected')) {
            // If the item is already selected, deselect it
            menuItem.style.backgroundColor = '';
            menuItem.style.color = '';
            menuItem.classList.remove('selected');
        } else {
            // Deselect all other items
            document.querySelectorAll('.menu_items').forEach(item => {
                if (item !== menuItem) {
                    item.style.backgroundColor = '';
                    item.style.color = '';
                    item.classList.remove('selected');
                }
            });

            // Select the clicked item
            menuItem.style.backgroundColor = selectedColor;
            menuItem.style.color = selectedTextColor;
            menuItem.classList.add('selected');
        }
    }
}

document.querySelectorAll('.menu_items').forEach(item => {
    item.addEventListener('click', changeSelectedMenu);
});

  /* function updateSummary() { 
    document.getElementById('option1').textContent = selectedOptions.drinkType ||  '_____';
    document.getElementById('option2').textContent = selectedOptions.coffeeType || '_____';
    document.getElementById('option3').textContent = selectedOptions.quantity || '_____';
    document.getElementById('option4').textContent = selectedOptions.grind || '_____';
    document.getElementById('option5').textContent = selectedOptions.delivery || '_____';
  }
  
  document.querySelectorAll('.menu_items').forEach(item => {
    item.addEventListener('click', changeSelectedMenu);
  });

    // Update the summary when a menu item is selected
    updateSummary();

    // Reset the selected options when the reset button is clicked
    document.getElementById('reset').addEventListener('click', () => {
        selectedOptions = {};
        updateSummary();
    });

    // Show the order summary when the order button is clicked

    document.getElementById('order').addEventListener('click', () => {
        let summary = document.getElementById('summary');
        summary.classList.remove('hidden');
    });

    // Hide the order summary when the close button is clicked
    document.getElementById('close').addEventListener('click', () => {
        let summary = document.getElementById('summary');
        summary.classList.add('hidden');
    });

    // Update the selected options when a menu item is selected

    document.querySelectorAll('.menu_items').forEach(item => {
        item.addEventListener('click', event => {
            let menuItem = event.target.closest('.menu_items');
            let menu = menuItem.closest('.menu');
            let menuTitle = menu.previousElementSibling.textContent;
            let selectedOption = menuItem.textContent;
            selectedOptions[menuTitle] = selectedOption;
            updateSummary();
        });
    }); */ 

 