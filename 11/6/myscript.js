let a = 1
let b = 1
let c = 0
function fib(n){
    a = b
    b = c
    c = a + b
    if (n == 1){
        return c
    }
    fib(n-1)
    return c
}

console.log(fib(10))