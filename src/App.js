//var request = require('request');

$(function(){
  alert('In')
  

});

var Manager = {

    /**
     *
     * @param userName
     * @param password
     * @param authkey
     * @param cb
     */
    getTestCases: function (cb) {

        try{

            var authorizationToken = null;

            var headers = {
                "Content-Type": "application/json"
            };

            var form = {
                "environment": "sdk",
                "clientSDKtype": "JSSDK",
                "domain": "irisconnect.comcast.com"
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
                    statusCode : status,
                    data : data
                };
                cb(res);
            });
        }
        
        
        catch(error){
            console.log("getTestcases error::", error);
        }

    },
}