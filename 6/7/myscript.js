let sum = parseInt(prompt("Введите сумму покупки:"))

if (sum >= 200 && sum <= 300){
    sum = sum - (sum * 0.03)
    alert(sum)
}
else if (sum > 300 && sum < 500){
    sum = sum - (sum * 0.05)
    alert(sum)
}
else if (sum > 500){
    sum = sum - (sum * 0.07)
    alert(sum)
}
else {
    alert(sum)
}