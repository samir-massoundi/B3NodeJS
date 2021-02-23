function returnStrings(s1,s2) {
    let resultat = parseInt(s1,10)+parseInt(s2,10);
    return resultat.toString();
    
}
let string1 = "2";
let string2 = "5";

let result = returnStrings(string1, string2);
console.log(result);