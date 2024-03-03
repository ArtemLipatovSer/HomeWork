function textColor (e){
    let i, list
    list = document.getElementsByClassName("tablink")
    for (i = 0; i < list.length; i++){
        list[i].style.background = 'antiquewhite'
    }
    e.style.background = "orange"
}

