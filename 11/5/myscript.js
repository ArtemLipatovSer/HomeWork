     function multi(a, b=2) {
        if(b > Math.sqrt(a)){
            document.write(`${a}`)
            return a;
        }
        else if (a % b == 0){
            document.write(`${b} *`)
            multi(a/b, b);
        }
        else{
            multi(a, ++b);
        }
     }
          
     multi(18);