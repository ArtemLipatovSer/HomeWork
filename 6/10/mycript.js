let day = parseInt(prompt("Введите день Вашего рождения"))
let month = parseInt(prompt("Введите месяц Вашего рождения"))
let year = parseInt(prompt("Введите год Вашего рождения"))

if ((day > 31 || month > 12) || (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11))){
    if ((month != 2)){
        alert("Не корректно введена дата")
    }
}
else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 30){
    day = 1
    month++;
    alert(`${day}.${month}.${year}`)
}
else if (day == 31 && month != 12){
    day = 1;
    month++;
    alert(`${day}.${month}.${year}`)
}
else if (day == 31 && month == 12){
    day = 1
    month = 1;
    year++;
    alert(`${day}.${month}.${year}`)
}
else if (month !=2) {  
    day++;
    alert(`${day}.${month}.${year}`)
}

if (year % 4 == 0  || year % 400 == 0 && year % 100 != 0 ){
    let newDay = 0;
    let newMonth = 0;
    newMonth = month;
    newDay = day;
    if (newDay==29 && newMonth == 2){
        newDay = 1;
        newMonth++;
        alert(`${newDay}.${newMonth}.${year}`)
    }
    if (newMonth == 2 && newDay > 29){
        alert("Не корректно введена дата")
    }
}
else {
        let newDayTwo = 0;
        let newMonthTwo = 0;
        newMonthTwo = month;
        newDayTwo = day;
    if (day==28 && month == 2){
        newDayTwo = 1;
        newMonthTwo++;
        alert(`${newDayTwo}.${newMonthTwo}.${year}`)
    }
    if (newMonthTwo == 2 && newDayTwo > 28){
        alert("Не корректно введена дата")
    }
}


