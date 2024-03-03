function perfect (n){
    let sum = 0;
    for (let i = 1; i < n; i++){
        if ( n % i == 0){
            sum = sum + i;
        }
    }
    if (sum == n){
        alert("Число совершенное!")
    }
    else {
        alert("Число не совершенное!")
    }
}
perfect(28)
