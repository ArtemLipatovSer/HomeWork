function perfect (n){
    let sum = 0;
    for (let i = 1; i < n; i++){
        if ( n % i == 0){
            sum = sum + i;
        }
    }
    if (sum == n){
        return n
    }
}

function perfectTwo (a, b) {
    for (a; a < b; a++){
        if (perfect(a)){
            document.write(` ${a}`)
        }
    }
}

perfectTwo (3, 100)