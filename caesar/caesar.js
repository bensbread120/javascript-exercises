const caesar = function(word, change) {
    let alpha = "abcdefghijklmnopqrstuvwyxz";
    let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
    let newWord = ""
    //for letter in word
    for (let i = 0;i<word.length;i++) {
        let letterIndex = alpha.indexOf(word[i]);
        let upperLetterIndex = ALPHA.indexOf(word[i]);
        if (letterIndex<0 && upperLetterIndex<0) {
            newWord+=word[i];
        } else if (letterIndex < 0) {
            let newIndex = upperLetterIndex + change;
            while (newIndex>25) {
                newIndex-=26;
                continue;
            }
            while (newIndex<0) {
                newIndex+=26;
                continue;
            }
            newWord+=ALPHA[newIndex];
        } else {
            let newIndex2 = letterIndex + change;
            while (newIndex2>25) {
                newIndex2-=26;
                continue;
            }
            while (newIndex2<0) {
                newIndex2+=26;
                continue;
            }
            newWord+=alpha[newIndex2];
        }
    }
    //find each letter in alpha/APLHA and return letter change spaces down or up
    return newWord;e
}

module.exports = caesar
