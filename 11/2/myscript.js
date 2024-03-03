function divider (a, b)
{
    if (b == 0) {
        return a;
    }
    if (a > b) {
       return divider (b, a % b); 
    }  
    else {
        return divider (a, b % a);
    }  
}

alert(divider (104, 40))
