function timeDate (hour, min, sec) {
    if ((min == undefined) && (sec == undefined)){
        return `${hour}:00:00`
    }
    if (min == undefined){
        return `${hour}:00:${sec}`
    }
    if (sec == undefined){
        return `${hour}:${min}:00`
    }
    return`${hour}:${min}:${sec}`
}

alert(timeDate(23, 22, 24))
