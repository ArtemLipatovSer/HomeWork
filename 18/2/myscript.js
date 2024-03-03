let wh = 0
let e = 0
btn.addEventListener('click', function(){
    wh = wh + 25
    e = e + 5
    if(e <= 100){
        en.innerHTML = e
    }
    else {
        en.innerHTML = 100
    }
    bat.style.width = `${wh}px`
})