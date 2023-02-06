const container = document.querySelector('#container');
const resetBtn = document.querySelector('#btn');
const input = document.querySelector('#input');

function makeGrid() {
    for (let i = 0; i < 265; i++) {
        const div = document.createElement('div');
        div.className = 'grid-square';
        container.appendChild(div);
    }
}

function changeGridSize() {
    container.textContent = '';
    container.style.setProperty(
        'grid-template-rows',
        `repeat(${input.value}, 1fr)`
    );
    container.style.setProperty(
        'grid-template-columns',
        `repeat(${input.value}, 1fr)`
    );

    if (input.value > 100) {
        alert('Too big please select a number smaller than 100');
        resetGrid();
    }

    for (let i = 0; i < input.value * input.value; i++) {
        const div = document.createElement('div');
        div.className = 'grid-square';
        container.appendChild(div);
    }
}

function resetGrid() {
    container.textContent = '';
    input.value = '';
    input.textContent = '';
    container.style.setProperty('grid-template-rows', 'repeat(16, 1fr)');
    container.style.setProperty('grid-template-columns', 'repeat(16, 1fr)');
    makeGrid();
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

function changeColors(e) {
    const newBgColor = randomColor();
    e.target.style.setProperty('background-color', newBgColor);
}

resetBtn.addEventListener('click', resetGrid);
input.addEventListener('change', changeGridSize);
container.addEventListener('mouseover', changeColors);

makeGrid();