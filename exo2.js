//Second Step
function addNumbers(strOperation)
{
    if(strOperation!=='')
    {
        arrayNumbers = strOperation.split(',');
        let result=0;
        for (let i = 0; i < arrayNumbers.length; i++) {
            //console.log(parseFloat(arrayNumbers[i]))
            result+=parseFloat(arrayNumbers[i])
        }
        //console.log("resultat in loop:", result)
        return result.toString();
    }
    else
    {
        return "0";
    }
}

let num1 = '1.1,2.2,3.3';
let out = addNumbers(num1);
console.log(out);
