let money = parseInt(prompt("Введите количество USD"))
let currency = parseInt(prompt("Введите валюту в которую хотите конвертировать: 1-EUR, 2-UAN или 3-AZN"))

switch (currency){
    case 1:
        alert(money * 0.92)
        break
    case 2:
        alert(money * 7.26)
        break
    case 3:
        alert(money * 1.70)
        break
}