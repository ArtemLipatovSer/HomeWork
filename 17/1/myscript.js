document.querySelector("input").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
})