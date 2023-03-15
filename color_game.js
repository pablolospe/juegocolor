let colors = ["", "", "", "", "", ""]
let h1 = document.querySelector("h1")
let colorDisplay = document.getElementById("colorDisplay")
let squares = document.querySelectorAll(".square")
let body = document.querySelectorAll("body")
let message = document.getElementById("message")
let pickedColor = ""
let resetButton = document.getElementById("reset")
let hard = document.getElementById("hard")
let easy = document.getElementById("easy")
let easySqueares = document.getElementById("easySqueares")
let numberOfSquares = 6
let alert = document.getElementById("alert")
let flag = true

function pickColor() {
    pickedColor = colors[Math.floor(Math.random() * numberOfSquares)]
}

alert.addEventListener("click", function () {
    Swal.fire({
        title: 'Como se juega a esta cosa?',
        text: 'Adiviná el color sabiendo que cantidad de R(rojo), G(verde), B(azul) contiene.',
        imageUrl: 'https://imborrable.com/wp-content/uploads/2022/10/rgb-colores.png',
        imageWidth: 400,
        width: 350,
        // imageHeight: 400,
        imageAlt: 'Custom image',
    })
})

//PROBAR CON UN FLAG PARA DESACTIVAR, FALTA REGULAR EN RESET EN FACIL 
//y EN RESPOSIVE CUNADO PAS DE 3 a 6 queda Apilado.
let adivinaste = (flag) => {
    flag &&
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adivinaste!',
        width: 300,
        showConfirmButton: false,
        timer: 1500
    })
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
function stopSquares() {
    for (let i = 0; i < colors.length; i++) {
        colors[i] = pickedColor();
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
    message.style.visibility = "visible";
    message.textContent = "☝️";
}

resetButton.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    reset()
    init()
})

function init() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        pickColor();
        colorDisplay.textContent = (pickedColor);
        h1.style.background = "rgb(35,35,35)";
        squares[i].addEventListener("click", function () {
            if (colors[i] !== pickedColor) {
                squares[i].style.background = "rgb(240, 248, 255)";
                message.style.visibility = "visible";
                message.textContent = ("INTENTA NUEVAMENTE")
            } else {
                adivinaste(flag)
                flag = false
                h1.style.background = pickedColor;
                changeColors(pickedColor);
                squares = 0
                resetButton.textContent = ("JUGAR DE NUEVO")
                message.style.visibility = "hidden";
            }
        })
        flag = true
    }
}

hard.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    easySqueares.classList.remove("easySqueares")
    this.classList.add("selected");
    easy.classList.remove("selected");
    numberOfSquares = 6;
    reset()
    init()

    //muestra 6 cuadrados
    for (let i = 5; i + 4 > squares.length; i--) {
        squares[i].hidden = false
        numberOfSquares = i
    }
})

easy.addEventListener("click", function () {
    squares = document.querySelectorAll(".square");
    easySqueares.classList.add("easySqueares")
    this.classList.add("selected")
    hard.classList.remove("selected")
    numberOfSquares = 3
    reset()
    init()

    //esconde 3 cuadrados
    for (let i = 5; i + 4 > squares.length; i--) {
        squares[i].hidden = true;
        numberOfSquares = i
    }
})

reset()
init()




