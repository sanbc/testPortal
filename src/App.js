//var request = require('request');

$(function(){
 

});

var Manager = {

    /**
     *
     * @param userName
     * @param password
     * @param authkey
     * @param cb
     */
    getTestCases: function (envOption, domainOption, sdk, cb) {

        try{

            var authorizationToken = null;

            var headers = {
                "Content-Type": "application/json"
            };

            var form = {
                "environment": envOption,
                "clientSDKtype": sdk,
                "domain": domainOption
            };
            form = JSON.stringify(form);
            console.log("\nCIMA :: getCimaAccessToken grant_type password \n"+ "Headers : "+JSON.stringify(headers) + "\nPayload : "+JSON.stringify(form));

            $.post(
                'http://localhost:9000/v1/irisTest/getTestCases',
                form,

                headers
            ).success(function(data, status) {
                console.log(" getCimaAccessToken Response statusCode : " + status + " body : ",data);
                res = {
                    "statusCode" : status,
                    "data" : data.data
                };
                cb(res);
            });
        }
        
        
        catch(error){
            console.log("getTestcases error::", error);
        }

    },
    executeTestCases: function (details, cb) {

        try{

            var authorizationToken = null;

            var headers = {
                "Content-Type": "application/json"
            };

            var form = {
                "environment": details.envOption,
                "clientSDKType": details.sdk,
                "testSuites": details.testSuites,
                "deviceId":details.deviceId,
                "domain": details.domainOption,
                "roomname": details.roomname,
                "participantId" : details.participants,
                "type" : details.type,
                "sessionId" : details.sessionId,
                "fromTN" : details.fromTN,
                "toTN" : details.toTN
            };
            form = JSON.stringify(form);
            console.log("\nCIMA :: getCimaAccessToken grant_type password \n"+ "Headers : "+JSON.stringify(headers) + "\nPayload : "+JSON.stringify(form));

            $.post(
                'http://localhost:9000/v1/irisTest/executeTests',
                form,

                headers
            ).success(function(data, status) {
                console.log(" getCimaAccessToken Response statusCode : " + status + " body : ",data);
                res = {
                    "statusCode" : status,
                    "data" : data.data
                };
                cb(res);
            });
        }
        
        
        catch(error){
            console.log("getTestcases error::", error);
        }

    },
    pushToDb: function(testReport, cb) {
        
       
        //form = JSON.stringify(form);
        var testReport = JSON.stringify(testReport);
        var headers = {
                "Content-Type": "application/json"
            };
        
         $.post(
                'http://localhost:3000/insertReport',
                testReport,

                headers
            ).success(function(data, status) {
                console.log(" getCimaAccessToken Response statusCode : " + status + " body : ",data);
                res = {
                    "statusCode" : status,
                    "data" : data.data
                };
                cb(res);
            });
    } 
}