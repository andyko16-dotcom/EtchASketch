//creating 16x16 div box with help of flex

const container = document.querySelector('#drawBox');

for (let i = 0; i <=15; i++) {
    let column = document.createElement('div');
    column.classList.add('column');



for (let i =0; i<16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    column.appendChild(cell);


}

container.appendChild(column);
}



//mousedown, mousemove, mouseup

let isDrawing = false;

//changing color of cells when pressed

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        this.style.backgroundColor = 'red';
    })

    cell.addEventListener('mousedown', () => {
        isDrawing = true;
    })
    
    cell.addEventListener('mouseup', () => {
        isDrawing = false;
    })
    
    cell.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            const cell = e.target;
            cell.style.backgroundColor = 'red';
        }
    })
})




