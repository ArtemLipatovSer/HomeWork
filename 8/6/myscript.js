let res = 0;
for (let i = 0; ; i++){
    let a = parseInt(prompt("Введите первое число:"))
    let b = parseInt(prompt("Введите второе число:"))
    let z = prompt("Выбирите знак действия на числами: +, -, *, /")
    if (z == "+") {
        res = a + b
    }
    if (z == "-") {
        res = a - b
    }
    if (z == "*") {
        res = a * b
    }
    if (z == "/") {
        res = a / b
    }
    alert(`Ваш результать - ${res}`)
    let c = confirm("Хотетите продолжить дальше?")
    if (c==true){
        continue
    }
    else {
        break
    }
}