let res = 0;
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        res = i * j
        document.write(` ${i} * ${j} = ${res};`)
        if (j == 10){
            document.write(`<br>`)  
        }
    }
}
