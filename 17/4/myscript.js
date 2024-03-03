green.style.backgroundColor = 'green'
btn.addEventListener("click", function(){
    if (green.style.backgroundColor == 'green'){
        green.style.backgroundColor = 'gray'
        orange.style.backgroundColor = 'orange'
    }
    else if (orange.style.backgroundColor == 'orange'){
        orange.style.backgroundColor = 'gray'
        red.style.backgroundColor = 'red'
    }
    else if (red.style.backgroundColor == 'red'){
        red.style.backgroundColor = 'gray'
        green.style.backgroundColor = 'green'
    }
})

