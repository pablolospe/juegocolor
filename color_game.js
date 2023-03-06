let colors = ["", "", "", "", "", ""]
let h1 = document.querySelector("h1")
let colorDisplay = document.getElementById("colorDisplay")
let squares = document.querySelectorAll(".square")
let body = document.querySelectorAll("body")
let message = document.querySelector(".message")
let pickedColor = ""
let button = document.querySelector("button")
let hard = document.getElementById("hard")
let easy = document.getElementById("easy")
let numberOfSquares = 6

function pickColor() {
    pickedColor = colors[Math.floor(Math.random() * numberOfSquares)]
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function setSquares() {
    for (let i = 0; i < colors.length; i++) {
        colors[i] = randomColor();
    }
}

function reset() {
    for (let i = 0; i < squares.length; i++) {
        setSquares();
        pickColor();
        colorDisplay.textContent = pickedColor;
        squares[i].style.background = colors[i]
    };
    h1.style.background = "rgb(35,35,35)";
    message.textContent = ("");
}

button.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    reset()
    init()
})


function init() {
    //squares = document.querySelectorAll(".square");
    for (let i = 5; i + 4 > squares.length; i--) {
        squares[i].hidden = false
        numberOfSquares = i
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        pickColor();
        colorDisplay.textContent = (pickedColor);
        squares[i].addEventListener("click", function () {

            if (colors[i] !== pickedColor) {
                squares[i].style.background = "rgb(35,35,35)";
                message.textContent = ("INTENTA NUEVAMENTE")
            }

            else {
                message.textContent = ("CORRECTO!!!");
                h1.style.background = pickedColor;
                changeColors(pickedColor);
                squares = 0
                button.textContent = ("JUGAR DE NUEVO")
            }

        })
    }
}

hard.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    this.classList.add("selected");
    easy.classList.remove("selected");
    numberOfSquares = 6;
    reset()
    for (let i = 5; i + 4 > squares.length; i--) {
        squares[i].hidden = false
        numberOfSquares = i
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        pickColor();
        colorDisplay.textContent = (pickedColor);
        squares[i].addEventListener("click", function () {
            if (colors[i] !== pickedColor) {
                squares[i].style.backgroundColor = "rgb(35,35,35)";
                message.textContent = ("INTENTA NUEVAMENTE")
            }
            else {
                message.textContent = ("CORRECTO!!!");
                h1.style.background = pickedColor;
                //changeColors(pickedColor);
            }
        })
    }
})

easy.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    this.classList.add("selected")
    hard.classList.remove("selected")
    numberOfSquares = 3
    reset()
    for (let i = 5; i + 4 > squares.length; i--) {
        squares[i].hidden = true;
        numberOfSquares = i
    }
    for (let i = 0; i <= 2; i++) {
        squares[i].style.background = colors[i]
        pickColor();
        colorDisplay.textContent = (pickedColor);
        squares[i].addEventListener("click", function () {
            if (colors[i] === pickedColor) {
                message.textContent = ("CORRECTO!");
                h1.style.background = pickedColor;
                //changeColors(pickedColor);      
            }
            else {
                squares[i].style.background = "rgb(35,35,35)";
                message.textContent = ("INTENTA NUEVAMENTE")
            }
        })
    }
})

reset()
init()




