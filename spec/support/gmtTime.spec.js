var timeModule = require('../../controllers/time');

describe("gmtTime add offset", function () {
    it("should return time in gmt", function () {

        var currentTime = new Date(null,null,null,19,10,0,0);
        var gmtTime= timeModule.TimeInGMT(3,30,"West",currentTime);
        expect(gmtTime).toBe("22:40 GMT");
    });
});

describe("gmtTime subtract offset", function () {
    it("should return time in gmt", function () {

        var currentTime = new Date(null,null,null,19,10,0,0);
        var gmtTime= timeModule.TimeInGMT(3,30,"East",currentTime);
        expect(gmtTime).toBe("16:40 GMT");
    });
});

describe("gmtTime add offset", function () {
    it("should return time in gmt", function () {

        var currentTime = new Date(null,null,null,23,30,0,0);
        var gmtTime= timeModule.TimeInGMT(3,0,"West",currentTime);
        expect(gmtTime).toBe("01:30 GMT");
    });
});

describe("gmtTime subtract offset", function () {
    it("should return time in gmt", function () {

        var currentTime = new Date(null,null,null,1,30,0,0);
        var gmtTime= timeModule.TimeInGMT(3,0,"East",currentTime);
        expect(gmtTime).toBe("22:30 GMT");
    });
});