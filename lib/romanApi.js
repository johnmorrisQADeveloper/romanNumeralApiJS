/**
 * Created by John Morris on 28/07/2017.
 */

var methods = {};

methods.patternMatch = function (searchString) {
    var found = false;
    var s = searchString;
    var pattern = new RegExp("^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");

    if (pattern.test(s))
        found = true;
    else
        found = false;
    if (searchString == "")
        found = false;
    return found;
};

methods.intToRoman = function (num) {
    if ((num != "") || (num !=0)){
        var lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
            roman = '', i;
        for (i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
    }
    else {
        roman = "";
    }
    return roman;
};

exports.data = methods;