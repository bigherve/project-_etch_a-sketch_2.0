const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < rows * columns; i++) {
        let div = document.createElement('div');
        div.className = 'grid-square';
        container.appendChild(div);
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

makeGrid(40, 40);

const fun = document.querySelectorAll('.grid-square');

fun.forEach((item) => {
    item.addEventListener('mouseenter', function(e) {
        const newBgColor = randomColor();
        e.target.style.setProperty('background-color', newBgColor);
    });
});