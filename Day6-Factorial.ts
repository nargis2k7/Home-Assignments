
function factorial(n){

    if(n<0)
        console.log("${n} is a negative number");
    if(n>0){
        let result = 1;
        for(let i=2;i<=n;i++){
               result *=i;
        }
        console.log(`Factorial value is ${result}`); 
    }
          

}

factorial(5)