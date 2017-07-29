/**
 * Created by jmo51 on 29/07/2017.
 */

var request = require("request");
var romanApi = require("../lib/romanApi");
var endPoint = require("../config/env.json").endPoint;
var debugg = require("../config/env.json").debugger;
var assert = require('assert');

describe("Main Path, Inner Boundary Values {1-3999}", function () {
    var expectedRoman, actualRoman;
    var values = [1, 15, 3999];
    var expectedRomanValues = new Array();
    for (i = 0; i < values.length; i++) {
        expectedRomanValues[i] = romanApi.data.intToRoman(values[i]);
    }
    var i = 0;
    values.forEach(function (value) {
        it("" + value, function (done) {
            this.timeout(550);
            request(endPoint + value, function (error, response, body) {
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
                if (debugg) {
                    console.log('statusCode        :', response.statusCode);
                }
            });
            setTimeout(done, 450);
        });
        it("" + values[i] + " =  " + expectedRomanValues[i], function (yes) {
            if (debugg) {
                console.log('expectedRoman     :', expectedRoman);
                console.log('actualRoman       :', actualRoman);
                console.log('expected = actual :', expectedRoman == actualRoman);
                console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
                console.log();
            }
            assert(actualRoman, expectedRoman, expectedRoman + " != " + actualRoman);
            assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
            setTimeout(yes, 250);
        })
        i++;
    })
})


describe("Main Path, Check combinations {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}", function () {
    var expectedRoman, actualRoman, responseCode;
    var values = [4, 5, 9, 10, 11, 39, 40, 41, 89, 90, 91, 389, 400, 450, 899, 900, 999, 1200];
    var expectedRomanValues = new Array();
    for (i = 0; i < values.length; i++) {
        expectedRomanValues[i] = romanApi.data.intToRoman(values[i]);
    }
    var i = 0;
    values.forEach(function (value) {
        it("" + value, function (done) {
            this.timeout(550);
            request(endPoint + value, function (error, response, body) {
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
                responseCode = response.statusCode;
                if (debugg) {
                    console.log('statusCode        :', responseCode);
                }
            });
            setTimeout(done, 450);
        });
        it("" + values[i] + " =  " + expectedRomanValues[i], function (yes) {
            if (debugg) {
                console.log('expectedRoman     :', expectedRoman);
                console.log('actualRoman       :', actualRoman);
                console.log('expected = actual :', expectedRoman == actualRoman);
                console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
                console.log();
            }
            assert(actualRoman, expectedRoman, expectedRoman + " != " + actualRoman);
            assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
            setTimeout(yes, 250);
        })
        i++;
    })
})


describe("Alternative Path, Check with 0", function () {
    var value = 0;
    var expectedRoman, actualRoman;
    expectedRoman = romanApi.data.intToRoman(value);
    it("" + value, function (done) {
        this.timeout(350);
        request(endPoint + value, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + value + " =  " + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert((expectedRoman == actualRoman), expectedRoman + " != " + actualRoman);
        assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
        setTimeout(yes, 250);
    })
})


describe("Alternative Path, Check with 9800", function () {
    var value = 9800;
    var expectedRoman, actualRoman;
    expectedRoman = romanApi.data.intToRoman(value);
    it("" + value, function (done) {
        this.timeout(350);
        request(endPoint + value, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + value + " =  " + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert((expectedRoman == actualRoman), expectedRoman + " != " + actualRoman);
        assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
        setTimeout(yes, 250);
    })
})


describe("Alternative Path, Check with -3", function () {
    var value = -3;
    var expectedRoman, actualRoman;
    expectedRoman = romanApi.data.intToRoman(value);
    it("" + value, function (done) {
        this.timeout(350);
        request(endPoint + value, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + value + " =  " + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
        setTimeout(yes, 250);
    })
})


describe("Alternative Path, Check with no values", function () {
    var expectedRoman, actualRoman;
    expectedRoman = "Enter a value";
    it("No value", function (done) {
        this.timeout(350);
        request(endPoint, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman();
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert(false, "No value entered");
        setTimeout(yes, 250);
    })
})


describe("Alternative Path, with chars ", function () {
    var value = "roman";
    var expectedRoman, actualRoman;
    expectedRoman = romanApi.data.intToRoman(value);
    it("" + value, function (done) {
        this.timeout(350);
        request(endPoint + value, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + value + " =  " + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert((expectedRoman == actualRoman), expectedRoman + " != " + actualRoman);
        assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
        setTimeout(yes, 250);
    })
})


describe("Alternative Path, with decimal values  ", function () {
    var value = 34.4;
    var expectedRoman, actualRoman;
    expectedRoman = romanApi.data.intToRoman(value);
    it("" + value, function (done) {
        this.timeout(350);
        request(endPoint + value, function (error, response, body) {
                if (debugg) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
                expectedRoman = romanApi.data.intToRoman(value);
                actualRoman = body;
            }
        );
        setTimeout(done, 250);
    })
    it("" + value + " =  " + expectedRoman, function (yes) {
        if (debugg) {
            console.log('expectedRoman     :', expectedRoman);
            console.log('actualRoman       :', actualRoman);
            console.log('expected = actual :', expectedRoman == actualRoman);
            console.log('isRoman           :', romanApi.data.patternMatch(actualRoman));
            console.log();
        }
        assert((expectedRoman == actualRoman), expectedRoman + " != " + actualRoman);
        assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
        setTimeout(yes, 250);
    })
})