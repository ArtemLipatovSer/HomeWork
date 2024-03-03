let Time = {
    hours: 17,
    min: 37,
    sec: 55,

    ShowInfo: function(){
        document.write(this.hours + ':' + this.min + ':' + this.sec)
    },
    ShowTimeSec: function(){
        let a = parseInt(prompt("Введите количество секунд:"))
        a = a + (this.hours*3600) + (this.min*60) + this.sec
        if (a > 86400){
            a = a - 86400
        }
        this.hours = parseInt(a/3600);
        this.min = parseInt((a - (this.hours*3600))/60)
        this.sec = a - (this.hours*3600) - (this.min*60)
        document.write(' ' + this.hours + ':' + this.min + ':' + this.sec)
    },
    ShowTimeMin: function(){
        let a = parseInt(prompt("Введите количество минут:"))
        a = (a*60) + (this.hours*3600) + (this.min*60) + this.sec
        if (a > 86400){
            a = a - 86400
        }
        this.hours = parseInt(a/3600);
        this.min = parseInt((a - (this.hours*3600))/60)
        this.sec = a - (this.hours*3600) - (this.min*60)
        document.write(' ' + this.hours + ':' + this.min + ':' + this.sec)
    },
    ShowTimeH: function(){
        let a = parseInt(prompt("Введите количество часов:"))
        a = (a*3600) + (this.hours*3600) + (this.min*60) + this.sec
        if (a > 86400){
            a = a - 86400
        }
        this.hours = parseInt(a/3600);
        if (this.hours > 24)
        this.min = parseInt((a - (this.hours*3600))/60)
        this.sec = a - (this.hours*3600) - (this.min*60)
        document.write(' ' + this.hours + ':' + this.min + ':' + this.sec)
    }

}

Time.ShowInfo()
Time.ShowTimeSec()
Time.ShowTimeMin()
Time.ShowTimeH()
