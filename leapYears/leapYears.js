//take in year to be tested
const leapYears = function(year) {
    let leap = false;
    //else return true if divisible by 4
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {
                leap = true;
            } else {
                leap = false;
            }
        } else leap = true;
    } 
    return leap;
}
    //if diveisible by 100, check if divisible by 400 otherwise return fals

    

module.exports = leapYears
