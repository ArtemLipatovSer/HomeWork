function degree (a, b){
    if (b == 1){
        return a
    }
    return a = a * degree(a, b-1)
}

alert(degree(2,3))