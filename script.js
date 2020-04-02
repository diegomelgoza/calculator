let screen = document.getElementById('screen');

// display the numbers when clicked
const number = document.querySelectorAll('.numbers');
number.forEach(button => {
    button.addEventListener('click', (e) => {
        e = button.innerHTML;
        screen.innerHTML += e;
    })
})