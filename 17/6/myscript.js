let a = parseInt(btn1.style.top)
let b = parseInt(btn2.style.top)

btn1.addEventListener("mouseover", function(){
    if (a < 50){
        ar1.style.top = preA1()
        ar1.className = 'arrow2'
        ar1.style.display = 'block'
    }
    else {
        ar1.style.top = preA2()
        ar1.style.display = 'block'
    }
})

btn1.addEventListener("mouseout", function(){
    ar1.style.display = 'none'
})

btn2.addEventListener("mouseover", function(){
    if (b < 50){
        ar2.style.top = preB1()
        ar2.className = 'arrow2'
        ar2.style.display = 'block'
    }
    else {
        ar2.style.top = preB2()
        ar2.style.display = 'block'
    }
})

btn2.addEventListener("mouseout", function(){
    ar2.style.display = 'none'
})

function preB1 (){
    let t = b + 60
    t = String(t + 'px')
    return t
}
function preB2 (){
    let t = b - 45
    t = String(t + 'px')
    return t
}
function preA1 (){
    let t = a + 60
    t = String(t + 'px')
    return t
}
function preA2 (){
    let t = a - 45
    t = String(t + 'px')
    return t
}



