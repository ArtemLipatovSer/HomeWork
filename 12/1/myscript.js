let Car = {
    manufacturer: "Ford",
    model: "Focus",
    year: "2005",
    speed: 100,

    ShowInfo: function(){
        alert(`Производитель - ${this.manufacturer},\nМодель - ${this.model},\nГод выпуска - ${this.year},\nСкредняя скорость - ${this.speed} км/ч`)
    },
    TimeSpeed: function(){
        let time = 0;
        let a = parseInt(prompt("Введите расстояние:"))
        time = a / this.speed
        if (time <= 4) {
            return document.write(`Вы потратите ${time} ч.`)
        }
        else{
            let z = time;
            do{
                z = z - 4
                time++
            }while(z > 4)
            return document.write(`Вы потратите ${time} ч.`)
        }
    }
}

Car.ShowInfo()
Car.TimeSpeed()