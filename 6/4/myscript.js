let year = parseInt(prompt("Введите год"))

if (year % 4 == 0  || year % 400 == 0 && year % 100 != 0 ){
    alert("Год високосный")
}
else {
    alert("Год не високосный")
}