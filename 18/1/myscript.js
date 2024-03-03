function a (e){
    let i, list
    list = document.getElementsByClassName("navi")
    for (i = 0; i < list.length; i++){
        list[i].style.background = 'rgb(29, 25, 25)'
    }
    e.style.background = "red"
}

kk.style.display = 'none'
menu.addEventListener('mouseover', function(){
    kk.style.display = 'block'
    menu.addEventListener('mouseout', function(){
        kk.style.display = 'none'
    })
})