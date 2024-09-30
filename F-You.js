const chops = document.querySelector('#container')
chops.addEventListener('click', e => {
    if (e.target.matches('div')) {
        console.log('Yelp')
    }
})

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

chops.addEventListener(
  "mouseover",
  (e) => {
     e.target.style.backgroundColor = "gold";
    })
 
function createButton() {
const buttonDiv = document.querySelector('.buttonDiv');
const reset = document.createElement('button');
reset.textContent = 'Reset Grid!';
buttonDiv.appendChild(reset);

reset.addEventListener('click', () => { 
  container.innerHTML = ''
  createNew()
  document.querySelectorAll('element').forEach(e => e.remove());
   })   
}
createButton();

function createNew() {
    let userInput = prompt('Please enter the number of squares for each side (Max: 100)');
    if(userInput > 100 ) {
        alert('You picked more than the max of 100....');
        return;
       }
makeRows(userInput)
makeColumns(userInput)
}

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function rainbowColor (e) {
    const rndCol= 'rgb(' + random(255) + ',' + random(255) +',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
}

btn.addEventListener("click", () => {
//document.querySelectorAll('element').forEach(())

//chops.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = rndCol}) 
//const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`; 
  btn.style.backgroundColor = rainbowColor;
  btn.style.borderColor = 'black'
  btn.style.borderStyle = 'double'
  btn.style.borderRadius = '4.5px'
  btn.style.color = 'blue'
  btn.style.fontFamily = 'cursive'
  btn.style.opacity = '.45'
});

let inputs = document.querySelectorAll('#container')
for(i = 0; i < 10; i++) {
  inputs[i].onmouseover = rainbowColor;
}

  