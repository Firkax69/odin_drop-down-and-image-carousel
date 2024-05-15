const dropDownButton = document.querySelector('.dropdown-menu-button');

dropDownButton.addEventListener('click', function displayDropDownMenu() {
    document.querySelector('.dropdown-content').classList.toggle('visible');
});

window.addEventListener('click', function hideDropDownMenu(event) {
    if(event.target !== dropDownButton) {
    document.querySelector('.dropdown-content').classList.remove('visible');
    }
});