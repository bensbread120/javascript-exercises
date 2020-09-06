const fibonacci = function(fibNum) {
    let a = 0;
    let b = 1;
    let answer;
    Number(fibNum);
    //creat a loop that loops the number of times of fibnum
    if (fibNum<0) {
        answer = "OOPS";
    } else if (fibNum<=2) {
        answer = b;
    } else {
        for (let i = 2;i<=fibNum;i++) {
            answer = a + b;
            a = b;
            b = answer;
        }
    }
    //return the finishing number
    return answer;
}

module.exports = fibonacci
//ab
 //b
 ///ab  