let colors = ["", "", "", "", "", ""]
let h1 = document.querySelector("h1")
let colorDisplay = document.getElementById("colorDisplay")
let squares = document.querySelectorAll(".square")
let body = document.querySelectorAll("body")
let message = document.querySelector(".message")
let pickedColor = ""
let button = document.getElementById("reset")
let hard = document.getElementById("hard")
let easy = document.getElementById("easy")
let numberOfSquares = 6
let alert = document.getElementById("alert")


function pickColor() {
    pickedColor = colors[Math.floor(Math.random() * numberOfSquares)]
}

alert.addEventListener("click", function (){
    Swal.fire({
        title: 'Como se juega a esta cosa?',
        text: 'Adiviná el color sabiendo que cantidad de R(rojo), G(verde), B(azul) contiene.',
        imageUrl: 'https://imborrable.com/wp-content/uploads/2022/10/rgb-colores.png',
        imageWidth: 400,
        // imageHeight: 400,
        imageAlt: 'Custom image',
      })
    })

let adivinaste = function(){Swal.fire({
    position: 'center-top',
    icon: 'success',
    title: 'Adivinaste!',
    showConfirmButton: false,
    timer: 1500
  })}

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
    message.style.visibility = "hidden";
    // message.textContent = ("xxx");
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
                squares[i].style.background = "rgb(240, 248, 255)";
                message.style.visibility = "visible";
                message.textContent = ("INTENTA NUEVAMENTE")
            }

            else {
                adivinaste()
                h1.style.background = pickedColor;
                changeColors(pickedColor);
                squares = 0
                button.textContent = ("JUGAR DE NUEVO")
                message.style.visibility = "hidden";
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
                squares[i].style.backgroundColor = "rgb(240, 248, 255)";
                message.style.visibility = "visible";
                message.textContent = ("INTENTA NUEVAMENTE")
            }
            else {
                message.style.visibility = "visible";
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
                squares[i].style.background = "rgb(240, 248, 255)";
                message.textContent = ("INTENTA NUEVAMENTE")
            }
        })
    }
})

reset()
init()




