let length = parseInt(prompt("Введите длину окружности:"))
let perimeter = parseInt(prompt("Введите периметр квадрата:"))

let radius = length / (2 * 3.14)
let lengthSq = perimeter / 4

if (radius <= (lengthSq / 2)){
    alert("Окружность поместиться в квадрат!")
}
else {
    alert("Окружность не поместиться в квадрат!")
}
