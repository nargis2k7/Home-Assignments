let s ="Hello,world";
let spl= s.split(',');
console.log("split : " + spl);
console.log("Length of the String is  : " + spl[1].length);
///////////////////////////////////////////////////////////////

let word = " fly me to the moon ";
let wordtrim = word.trim().split(' ');
console.log("Last word length of the String is  : " + wordtrim[4].length);
///////////////////////////////////////////////

function isAnagram(){
    const param = ["silent","listen"]
    const param1 = param[0].trim().split('').sort();
    const param2 = param[1].trim().split('').sort();
    console.log(param1.join('')==param2.join(''));
}
isAnagram();
////////////////////////////////////////////////
function isAnagram1(){
    const param = ["hello","Hello"]
    const param1 = param[0].trim().toLowerCase().split('').sort();
    const param2 = param[1].trim().toLowerCase().split('').sort();
    console.log(param1.join('')==param2.join(''));
}
isAnagram1();
