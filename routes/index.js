var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

exports.userValidation = (req,res) => {
    console.log("received",req.body);
    var data = req.body;
    var email = data.email;var pwd = data.pwd
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        
        console.log("email, pwd", email,pwd);
        validate(db, data)
            
    });
    
}

var validate = (db, options) => {
    db.collection('user').find({
                "email" : email
            }, function(err, docs) {
                //assert.equal(err, null);
                docs.each(function(err, doc) {
                    
                    if(doc) {
                    console.log("Inserted a document into the restaurants collection.", doc);    
                    } else {
                        res.end();
                    }
                })
                   
            });
            db.close();
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
