/**
 * Created by John Morris on 29/07/2017.
 */

var request = require("request");
var romanApi = require("../lib/romanApi");
var endPoint = require("../config/env.json").endPoint;
//var debugg = require("../config/env.json").debugger;
var assert = require('assert');
var debugg = require('../lib/options');

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
                if (debugg().debugger) {
                    console.log('error             :', error);
                    console.log('statusCode        :', response.statusCode);
                }
            });
            setTimeout(done, 450);
        });
        it("" + values[i] + " =  " + expectedRomanValues[i], function (yes) {
            if (debugg().debugger) {
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
                if (debugg().debugger) {
                    console.log('error             :', error);
                    console.log('statusCode        :', responseCode);
                }
            });
            setTimeout(done, 450);
        });
        it("" + values[i] + " =  " + expectedRomanValues[i], function (yes) {
            if (debugg().debugger) {
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