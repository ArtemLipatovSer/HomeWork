let lesson = document.querySelector('#lesson')
let btnHead = document.querySelector('#btnHead')
let journal = document.querySelector('#journal')
let group = document.querySelector('#group')
let form = document.querySelector('form')

let count = 0

let a
console.log(lessonAll[1])

btnHead.addEventListener('click', ()=>{
    document.querySelectorAll(".del").forEach(e => e.remove());
    document.querySelectorAll(".btnSub").forEach(e => e.remove());
    document.querySelector('#topic').value = lesson.value

    if (group.value === 'Group 1'){
        count = groupOne;
    }
    if (group.value === 'Group 2'){
        count = groupTwo;
    }
    if (group.value === 'Group 3'){
        count = groupThree;
    }

    console.log(count)
    for (let i = 0; i < count.length; i++){
    
        let nameTr = document.createElement('tr')
        nameTr.classList.add('del')
        let nameTh = document.createElement('th')

        let thCheckBox = document.createElement('th')
        thCheckBox.innerHTML = count[i].present
                        
        journal.appendChild(nameTr)
        nameTr.appendChild(nameTh)
        nameTr.appendChild(thCheckBox)  
        nameTh.innerHTML = count[i].name
    }
    let btn = document.createElement('button')
    btn.setAttribute('type', 'submit')
    btn.classList.add('btnSub')
    btn.innerHTML = 'Save'
    form.appendChild(btn)
})
