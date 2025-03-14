const num =[1,2,3,2,5,2,2,5,2,2]
const k = 5;

let count =0;
num.forEach((num)=>{
    if(num===k)
        count = count+1;
})

    
console.log(count);
