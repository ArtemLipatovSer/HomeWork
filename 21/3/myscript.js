btn.addEventListener('click', function(){
    let product = document.querySelectorAll('td')
    for (let i=0; i < product.length; i++){
        if (product[i].dataset.productAvailability == 'Нет в наличии'){
            product[i].parentNode.style.backgroundColor = 'red'
        }
    }
})
