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


///mousedown, mousemove, mouseup

let isDrawing = false;

//changing color of cells when pressed

const cells = document.querySelectorAll('.cell');

let cellColor

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (shade) {
            let newRgb = shades(cell.style.backgroundColor)
            cell.style.backgroundColor = newRgb
            
        } else {
            cell.style.backgroundColor = cellColor;
        }


    })

    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        shade = true;
    })
    
    cell.addEventListener('mouseup', () => {
        isDrawing = false;
        shade = false;
    })
    
    cell.addEventListener('mousemove', (e) => {
        if (shade) {
            const cell = e.target;
            cell.style.backgroundColor = shades(cell.style.backgroundColor)
    
        }
        if (isDrawing) {
            const cell = e.target;
            cell.style.backgroundColor = cellColor;

        }
        
    })



})


//this is for preset colors and eraser
const colors = document.querySelectorAll('button');

colors.forEach(color => {
    color.addEventListener('click', function() {
        switch (this.classList.value) {
            case 'red':
                cellColor = 'rgb(255, 0, 0)';
                break
            case 'blue':
                cellColor = 'rgb(0,0,255)';
                break
            case 'green':
                cellColor = 'rgb(0,255,0)';
                break
            case 'purple':
                cellColor = 'rgb(128,0,128)';
                break
            case 'orange':
                cellColor = 'rgb(255,165,0)';
                break
            case 'yellow':
                cellColor = 'rgb(255,255,0)';
                break
            case 'black':
                cellColor = 'rgb(0,0,0)';
                break
            case 'eraser':
                cellColor = 'rgb(255,255,255)';
                break
        }
    })
})


//for input type color
const colorPicker = document.querySelector('.colorPicker')

colorPicker.addEventListener('change', function() {
    cellColor = this.value;
});


//Shader Control Panel
const shaderOnOff = document.querySelector('.shader');
let shade = false;

shaderOnOff.addEventListener('click', function(e) {
    shade = !shade;
});





//rgb is a string; color function creates rbg code string

function shades(color) {
    let selectedColor = color.substring(4, color.length -1).split(',');
    let r = parseInt(selectedColor[0]);
    let b = parseInt(selectedColor[1]);
    let g = parseInt(selectedColor[2]);

    let newR = Math.max(0, r - 1);
    let newB = Math.max(0, b - 1);
    let newG = Math.max(0, g - 1);
    
    return`rgb(${newR}, ${newB}, ${newG})`


}


