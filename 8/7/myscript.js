let a = prompt("Введите число:")
let b = prompt("На сколько Вы хотите сдвинуть число:")
arr = a.split('');
 
for(let i = 0; i < b; i++) {
  arr.push(arr.shift())
}
alert(arr.join``);