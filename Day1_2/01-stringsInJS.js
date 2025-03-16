let str = "NargisLearningPlaywright"

let reverse = str.split('').reverse().join('')
console.log("Original String is : " + str +"  Reverse String is : "+ reverse);

let stringTest = function(str1) {
   let reverse1 = str1.split('').reverse().join('');
return str1===reverse1;
    
}

console.log(stringTest('madam'));


