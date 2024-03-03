let newWin;
openWindowBtn.addEventListener('click', function(){
    newWin = window.open("help.html", "newWin", "width=250, height=500");
})
increaseSizeBtn.addEventListener('click', function(){
    newWin.resizeBy(100, 0);
})
decreaseSizeBtn.addEventListener('click', function(){
    newWin.resizeTo(0, -100);
});
closeWindowBtn.addEventListener('click', function(){
    newWin.close()
    window.close()
})