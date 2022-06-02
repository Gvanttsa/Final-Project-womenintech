//burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navbarlinks');
let firstLine = document.getElementById('burger1');
let secondline = document.getElementById('burger2');
let thirdline = document.getElementById('burger3')


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('activeNav');
    firstLine.classList.toggle('active');
    secondline.classList.toggle('active');
    thirdline.classList.toggle('active');

})

