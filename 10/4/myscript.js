function sq (a, b){
    let s = 0;
    s = a * b;
    if (b == undefined){
        s = a * a; 
    }
    alert(`Площадь равна - ${s}`)
}
sq (5)