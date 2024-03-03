let m = 0;
function max (n) {
    if (n % 10 > m) {
        m = n % 10
    }
    if (n > 10) {
        max(parseInt(n / 10))
    }
    return m
}
alert(max(255))