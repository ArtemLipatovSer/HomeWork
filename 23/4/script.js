let txt = document.querySelectorAll('.txt')
let btnBook = document.querySelectorAll('.btnBook')
let nameBook = document.querySelector('#nameBook')

for (let i = 0; i < btnBook.length; i++){
    let btn = btnBook[i]
    btn.addEventListener('click', function(){
        for (let j = 0; j < txt.length; j++){
            if (i == j){
                nameBook.value = txt[j].innerHTML
            }
        }
    })
}

let form = document.querySelector('form')
let quantity = document.querySelector('#quantity')
let name = document.querySelector('#name')
let address = document.querySelector('#address')
let dataDeliv = document.querySelector('#dataDeliv')
let comment = document.querySelector('#comment')
let conclusion = document.querySelector('#conclusion')

form.addEventListener('submit', function(e){
    e.preventDefault()
    conclusion.innerHTML = `${name.value}, thanks for the order! <br><br> Book 
                        "${nameBook.value}" will be delivered on ${dataDeliv.value} to 
                        ${address.value} <br> Coments: ${comment.value}`
})

