//input string or sentence
const palindromes = function(string) {
    //convert string to all lowercase and removes all spaces.
    string = string.toLowerCase();
    string = string.replace(/ /g, "")
    //save string into split array
    let stringArray = string.split("");
    //remove any punctuation
    for (let i = 0;i < stringArray.length;i++) {
        if (stringArray[i] == "," || stringArray[i] === "." || stringArray[i] == "!") {
            stringArray.splice(i, 1);
        } 
    }
    console.log("stringArray after item removed:" + stringArray)
    let string1 = stringArray.join("")
    //save separate array as reverse of original and unreverse original
    stringArray.reverse();
    let string2 = stringArray.join("");
    //compare both arrays
    return string1 === string2;
}

module.exports = palindromes
