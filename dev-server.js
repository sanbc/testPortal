var express = require('express');
var bodyParser = require('body-parser')



var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/insertReport', function(req,resp) {
    console.log("hello", req.body);
    var testReport = req.body;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, testReport, function() {
            db.close();
        });
    });
})

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test1';

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





app.listen(3000, function() {
    console.log("dev server listening to port 3000");
})