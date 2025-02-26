function numbertype(param1) {

    let message;
    if (param1 > 0)
        message = "Number is Positive Number";
    else if (param1 < 0)
        message = "Number is Negative Number";
    else
        message = "Number is Neutral";

    return message;
}

let no = -12;
console.log(numbertype(no));