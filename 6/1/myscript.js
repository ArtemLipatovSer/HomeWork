let age = parseInt(prompt("Введите Ваш возраст:"));

    if (age >= 0 && age < 12) {
        alert ("Вы ребенок!")
    }
    else if (age >= 12 & age < 18) {
        alert ("Вы подросток!")
    }
    else if (age >= 18 & age < 60) {
        alert ("Вы взрослый!")
    }
    else if (age > 60) {
        alert ("Вы пенсионер!")
    } 