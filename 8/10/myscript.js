 let N = 0;
do {
    N = parseInt(prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
    );
} while (N < 0 || N > 100);

let a = 0;
let b = 0;
let c = 100;
let d =0;

while (a <= c) {
    b = parseInt((a + c) / 2);
    d = prompt(`Ваше число <, > или = ${b}?`);

    if (d == ">") {
    a = b + 1;
    } else if (d == "<") {
    c = b - 1;
    } else {
    a = c + 1;
    }
}
alert("Вы отгадали!");

