//creating 16x16 div box with help of flex

const container = document.querySelector('#drawBox');
const resizeButton = document.querySelector('.resize');

function createCells (numCells) {
    container.innerHTML = '' //clear existing cell
    container.style.gridTemplateRows = `repeat(${numCells}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${numCells}, 1fr)`;



    for(let i = 0; i < numCells*numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = 'rgb(255,255,255)';
        container.appendChild(cell);
    }


    //for addeventlistener mouseup mousedown mousemove
    let isDrawing = false;
    let clicked = false;
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            if (shade) {
                let newRgb = shades(cell.style.backgroundColor);
                cell.style.backgroundColor = newRgb;
                
            } else if (rainbow) {
                let ranColor = randomColor();
                cell.style.backgroundColor = ranColor;
            } else {
                cell.style.backgroundColor = cellColor;
            }
    
    
        })
    
        cell.addEventListener('mousedown', () => {
            isDrawing = true;
            clicked = true;
            
        })
        
        cell.addEventListener('mouseup', () => {
            isDrawing = false;
            clicked = false;
            
            
        })
        
        cell.addEventListener('mousemove', function(e) {
            const cell = e.target;

            if (shade && clicked) {
                cell.style.backgroundColor = shades(cell.style.backgroundColor);
                
            } else if (rainbow && clicked) {
                cell.style.backgroundColor = randomColor(cell.style.backgroundColor);
                
            } else if (isDrawing && clicked) {
                cell.style.backgroundColor = cellColor;
            }


        })
    })

}

resizeButton.addEventListener('click', function() {
    const numCells = prompt('Enter grid size');
    if (numCells > 1 && numCells < 65) {
        createCells(numCells)
        
    } else {
        alert('Enter a number between 2 - 50');
    }
}); 

//this is for preset colors and eraser
const colors = document.querySelectorAll('button');

colors.forEach(color => {
    color.addEventListener('click', function() {
        switch (this.classList.value) {
            case 'red':
                cellColor = 'rgb(255, 0, 0)';
                console.log('red')
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
let cellColor;
colorPicker.addEventListener('change', function() {
    cellColor = this.value;
});


//Shader Control Panel
const shaderOnOff = document.querySelector('.shader');
let shade = false;

shaderOnOff.addEventListener('click', function(e) {
    shaderOnOff.classList.toggle('dark');
    shade = !shade;
});





//rgb is a string; color function creates rbg code string

function shades(color) {
    let selectedColor = color.substring(4, color.length -1).split(',');
    let r = parseInt(selectedColor[0]);
    let b = parseInt(selectedColor[1]);
    let g = parseInt(selectedColor[2]);

    let newR = Math.max(0, r - 2);
    let newB = Math.max(0, b - 2);
    let newG = Math.max(0, g - 2);
    
    return`rgb(${newR}, ${newB}, ${newG})`


}



//randomColor function
function randomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rainbowColor = `rgb(${red}, ${green}, ${blue})`

    return rainbowColor
}


//randomColor Control Panel
const rainbowOnOff = document.querySelector('.rainbow');
let rainbow = false;

rainbowOnOff.addEventListener('click', function() {
    rainbowOnOff.classList.toggle('dark');
    rainbow = !rainbow;
});









//inital

createCells(16); // default size of cells