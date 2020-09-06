//take in array object
const getTheTitles = function(array) {
    
    let newArray = []
    //for every instance of the title element retrieve value and place into new array
    for (let i = 0;i < array.length; i++) {
        newArray.push(array[i]["title"]);
    }
    //return new array with only titles
    return newArray;
}

module.exports = getTheTitles;
