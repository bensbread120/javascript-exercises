const sumAll = function(num1, num2) {
    let answer = 0;
    //if either of numbers is not a number return error
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        answer = "ERROR";
    } //if either of number is negative return error
    else if (num1 < 0 || num2 < 0){ 
        answer = "ERROR";
    } //if num1 is less than num2
    else if (num1 < num2) {
        for (num1;num1<=num2;num1++) {
            answer+=num1
        }
    } //if num2 is less than num1
    else {
        for (num2;num2<=num1;num2++) {
            answer+=num2
        }
    } return answer
}

module.exports = sumAll
