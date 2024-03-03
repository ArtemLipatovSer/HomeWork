let ul = document.querySelector("#myList")
let li;
let a;
for (let i=1; i<=5; i++){
    li = document.createElement('li')
    li.textContent = i;
    ul.appendChild(li)
}
ul.removeChild(ul.childNodes[3])
console.log(ul)

