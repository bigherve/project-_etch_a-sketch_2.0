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

makeGrid(40, 40);

const fun = document.querySelectorAll('.grid-square');

fun.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'hotpink';
    });
});