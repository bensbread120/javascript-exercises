const removeFromArray = function(array, ...eraseMe) {
    for (let x = 0;x < eraseMe.length;x++){
        for (let i = 0;i < array.length;i++) {
            if (array[i] === eraseMe[x]) {
                array.splice(i, 1);
            }
        }
    }    
    return array;
}

module.exports = removeFromArray
