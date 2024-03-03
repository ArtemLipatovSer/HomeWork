function openWin(name, el, color){
    let i, nav, head;
    head = document.getElementsByClassName("head")
    for (i = 0; i < head.length; i++){
        head[i].style.display = 'none'
        document.getElementById('obl').style.display = 'none'
    }
    
    nav = document.getElementsByClassName("nav")
    for (i = 0; i < nav.length; i++){
        nav[i].style.background = 'grey'
        
    }
    el.style.background = el.dataset.color
    document.getElementById(name).style.display = 'block'
    
}