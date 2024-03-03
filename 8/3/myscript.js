let a = parseInt(prompt("Введите число:"))
let b = 1
while (a >= b){
    if (a % b == 0){
        document.write(`${b} `)
    }
    b++;
}