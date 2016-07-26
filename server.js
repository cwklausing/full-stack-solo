var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/groceries";
var MongoDB = mongoose.connect(mongoURI).connection;
var index = require('./routes/index.js');
var groceryList = require('./routes/groceryList.js')

MongoDB.on('error', function(error){
  console.log('MongoDB connection error: ', error);
});

MongoDB.once('open', function(){
  console.log('MongoDB connection open!');
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', index);
app.use('/groceryList', groceryList)
