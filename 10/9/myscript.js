function time (sec) {
    let hour = 0;
    let min = 0;
    hour = parseInt(sec/3600);
    min = parseInt((sec - (hour*3600))/60)
    sec = sec - (hour*3600) - (min*60)
    return`${hour}:${min}:${sec}`
}

alert(time(84144))