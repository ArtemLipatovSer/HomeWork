let a = parseInt(prompt("Введите первое число:"))
let b = parseInt(prompt("Введите второе число:"))
let sum = 0;

while (a <= b){
    sum = sum + a;
    a++;
}
alert(sum);