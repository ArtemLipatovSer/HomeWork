let neg = 0;
let pos = 0;
let nul = 0;
let even = 0;
let notEven = 0;
for (let i=0; i < 10; i++){
    let a = parseInt(prompt("Введите число:"))
    if (a < 0){
        neg++
    }
    if (a > 0){
        pos++
    }
    if (a == 0){
        nul++
    }
    if (a % 2 == 0){
        even++
    }
    if (a % 2 != 0){
        notEven++
    }
}
alert(`Вы ввели отрицательных чисел: ${neg} \nПоложительных чисел: ${pos} \nРавных нулю: ${nul} \nЧетных: ${even} \nНе четных: ${notEven}`)