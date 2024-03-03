let d = 1
let count = 0;
function simple (n){ 
    if (n % d == 0){
        count++
    }
    d++;
    if (n / d < 1){
        return count
    }
    simple(n)
    return count
}
console.log (simple(13))
if (count == 2){
    alert ("Число простое")
}
if (count != 2) {
    alert("Число составное")
}