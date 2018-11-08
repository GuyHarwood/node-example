
var fullYear = require('../../services/time-fullYear');

exports.getCurrentTime = function (req, res) {

    var userData = req.body;

    if (userData == null) {
        res.status(403).send('No data sent!')
    }

    try {
        var promise = new Promise(function(resolve, reject) {

            var currentTime= new Date().toLocaleTimeString();

            if (currentTime!=null) {
                resolve(currentTime);
            }
            else {
                reject(Error("null time"));
            }
        });

        promise.then(function(result) {

            console.log("Promise worked");
            res.send(JSON.stringify(result));

        }, function(err) {
            console.log("Something broke");
            res.send(JSON.stringify(err));

        });

    } catch (e) {
        res.status(500).send('error ' + e);
    }
};

exports.getCurrentYear = function (req, res) {

    var userData = req.body;

    if (userData == null) {
        res.status(403).send('No data sent!')
    }

    try {
        var promise = new Promise(function(resolve, reject) {

            const currentYear = fullYear.execute();

            if (currentYear!=null) {
                resolve(currentYear);
            }
            else {
                reject(Error("null year"));
            }
        });

        promise.then(function(result) {

            console.log("Promise worked");
            res.send(JSON.stringify(result));

        }, function(err) {
            console.log("Something broke");
            res.send(JSON.stringify(err));

        });

    } catch (e) {
        res.status(500).send('error ' + e);
    }
};

 exports.TimeInGMT=function(gmtOffsetHours,gmtOffsetMinutes,WestOrEast,currentTime){

     var GMTTime;
     var GMTHRS;
     var GMTMin;

     if(WestOrEast=="West") {
         GMTHRS = currentTime.getHours() + gmtOffsetHours;
         GMTMin = currentTime.getMinutes() + gmtOffsetMinutes;

         if(GMTHRS>24)
             GMTHRS=GMTHRS-24;
         if(GMTMin>60)
             GMTMin=GMTMin-60;
     }
     else if(WestOrEast=="East"){
         GMTHRS = currentTime.getHours() - gmtOffsetHours;
         GMTMin = currentTime.getMinutes() - gmtOffsetMinutes;

         if(GMTHRS<0)
             GMTHRS=24+GMTHRS;
         if(GMTMin<0)
             GMTMin=60+GMTMin;
     }

     GMTHRS=GMTHRS.toString();
     GMTMin=GMTMin.toString();
     GMTTime=GMTHRS+":"+GMTMin+" "+"GMT";

     return GMTTime;

};