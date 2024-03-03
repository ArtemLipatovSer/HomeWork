function strStat (str){
    let letter = 0;
    for (let i in str){
        
        if (str[i] == (/\d+/g)){
            letter++
        }
        
    }
    return letter
}

console.log(strStat ('He111???llo'))