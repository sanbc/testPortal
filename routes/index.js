var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

exports.userValidation = (req,res) => {
    console.log("received",req.body);
    var data = req.body;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        
        validate(db, data).then((data) => {
            console.log("response is",data);
            db.close();
            res.send(data);
            res.end();
        })
            
    });
    
}

var validate = (db, options, cb) => {
    var email = options.email;
    var pwd = options.pwd
    console.log("email, pwd", email,pwd);
    return new Promise((resolve, reject) => {    
    db.collection('user').find({
                "email" : email,
                "pwd" : pwd
            }, function(err, docs) {
                //assert.equal(err, null);
                docs.each(function(err, doc) {
                    
                    if(doc) {
                        console.log("User Validated", doc);
                        var resp = {"text" : "User Validated", "status" : 200};
                        resolve(resp);
                    } else {
                        var resp = {"text" : "User not found", "status" : 400};
                        reject(resp);
                       // res.end();
                    }
                })
                   
            });
            
    });
}

var insertDocument = function(db, testReport, callback) {

    for (var prop in testReport) {
        console.log('obj.' + prop, '=', testReport[prop]);
        prop = JSON.parse(prop);
        for(var i = 0; i < prop.length; i++) {
            var obj = prop[i];
            db.collection('testReport').insertOne( {
                "id" : obj.id,
                "name" : obj.name,
                "testCase" : obj.testCase,
                "testExecutionTime" : obj.testExecutionTime,
                "error" : obj.error
            }, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document into the restaurants collection.");
                callback();
            });
        }
   }
   

};
