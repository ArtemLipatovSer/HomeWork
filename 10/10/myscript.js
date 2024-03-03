function timeSec (sec) {
    let hour = 0;
    let min = 0;
    hour = parseInt(sec/3600);
    min = parseInt((sec - (hour*3600))/60)
    sec = sec - (hour*3600) - (min*60)
    return`${hour}:${min}:${sec}`
}

function time (hour, min, sec, hourOne, minOne, secOne) {
    let one = ((hour*3600) + (min*60) + sec)
    let two = ((hourOne*3600) + (minOne*60) + secOne)
    let sum = Math.abs(two - one)
    return timeSec(sum)
}

alert(time(23, 22, 24, 6, 12, 24))