document.querySelector("textarea").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^0-9\.]/g, function(){
        mod.style.display = 'block'
        return ''
    });
})
btn.addEventListener('click', function(){
    mod.style.display = 'none'
})