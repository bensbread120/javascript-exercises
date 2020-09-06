const repeatString = function(string, repeats) {
    let newString = ""
    if (repeats<0) {
        newString = "ERROR"
    } else {
        for (let x = 0;x < repeats;x++) {
            newString+=string;
        }
    }
    
    return newString;
}

module.exports = repeatString
