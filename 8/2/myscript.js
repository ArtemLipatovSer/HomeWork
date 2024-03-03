let a = parseInt(prompt("Введите первое число:"))
let b = parseInt(prompt("Введите второе число:"))

while (a != 0 && b !=0){
    if (a > b){
        a = a % b
    }
    else {
        b = b % a
    }
}
alert(a + b)