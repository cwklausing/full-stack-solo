var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/List";
var MongoDB = mongoose.connect(mongoURI).connection;
var index = require('./routes/index.js');
var groceryList = require('./routes/groceryList.js')

//Connect to MongoDB and handle errors
MongoDB.on('error', function(error){
  console.log('MongoDB connection error: ', error);
});
MongoDB.once('open', function(){
  console.log('MongoDB connection open!');
});

//Routes and uses
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', index);
app.use('/groceryList', groceryList);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on Port ', port);
});
