//Second Step
function addNumbers(strOperation)
{
    arrayNumbers = strOperation.split(',')
    console.log(arrayNumbers)
    return "0";
}

let num1 = '1.1,2.2';
let result = addNumbers(num1);
console.log(result);