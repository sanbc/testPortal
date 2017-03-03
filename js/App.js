//var request = require('request');

$(function(){
  
  $("#dfrom li").click(function(){
    $("#dFromId").text($(this).text());
    Manager.getTestCases(); 
  });

});

var Manager = {

    /**
     *
     * @param userName
     * @param password
     * @param authkey
     * @param cb
     */
    getTestCases: function (userName, password, authkey, cb) {

        try{

            var authorizationToken = null;

            var headers = {
                "Content-Type": "application/json"
            };

            var form = {
                environment: "sdk",
                clientSDKtype: "EmbSDK",
                domain: "irisconnect.comcast.com"
            };

            console.log("\nCIMA :: getCimaAccessToken grant_type password \n"+ "Headers : "+JSON.stringify(headers) + "\nPayload : "+JSON.stringify(form));

            $.ajax({
                method: 'POST',
                url: 'http://localhost:9000/v1/irisTest/getTestCases',
                form: form,
                headers: headers
            }, function (err, res, body) {
                console.log(getDate() + " getCimaAccessToken Response statusCode : " + res.statusCode + " body : ",res.body);
                res = {
                    statusCode : res.statusCode,
                    data : res.body
                };
                cb(res);
            });
        }
        catch(error){
            console.log("getTestcases error::", error);
        }

    },
}