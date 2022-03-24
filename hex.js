const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // const randomNumber = getRandomNumber();
    //#1D4A3F
    let hexColor = '#';
    for (let index = 0; index < 6; index++) {

        hexColor += hex[getRandomNumber()];

    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}