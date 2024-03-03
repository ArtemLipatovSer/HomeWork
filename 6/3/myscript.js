let number = parseInt(prompt("Введите трехзначное число"))

let one = parseInt(number / 100);
let two = parseInt((number % 100) / 10);
let three = parseInt(number % 10);

if (one === two || one === three || two === three){
    alert("В введенном числе есть одинаковые цифры!")
}
else {
    alert("В введеном числе нет одинаковых чисел!")
}