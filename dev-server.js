var express = require('express');
var bodyParser = require('body-parser')
var routes = require('./routes/index.js')


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

//app.use(bodyParser.json({ type: 'application/*+json' }))


/*app.post('/insertReport', function(req,resp) {
    console.log("hello", req.body);
    var testReport = req.body;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, testReport, function() {
            db.close();
        });
    });
})
*/
app.post('/userValidation', routes.userValidation);

/*
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

*/



app.listen(3000, function() {
    console.log("dev server listening to port 3000");
})