let number = parseInt(prompt("Введите пятизначное число:"))

let one = parseInt(number / 10000);
let two = parseInt((number / 1000) %  10);
let three = parseInt(number %  10);
let four = parseInt((number %  100) / 10); 

if (one === three && two === four){
    alert("Число - палиндром")
}
else {
    alert("Число обычное")
}