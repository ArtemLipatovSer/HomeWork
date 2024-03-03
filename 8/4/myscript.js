let a = parseInt(prompt("Введите число:"))
let count = 0;
do{
    a = parseInt(a / 10);
    count++
}while(a > 0)
alert(count)