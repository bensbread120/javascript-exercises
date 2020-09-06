const reverseString = function(string) {
    let splitString = string.split("");
    let splitReverse = splitString.reverse()
    return splitReverse.join("")
}

module.exports = reverseString
