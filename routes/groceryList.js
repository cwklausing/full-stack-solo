var router = require('express').Router();
var GroceryList = require('../models/groceryList.js');
var mongoose = require('mongoose');

// Send the grocery list in the database, handle errors for database fetch
router.get('/getList', function(request, response){
  GroceryList.find({}, function(error, list){
    if(error){
      console.log('Failed to find grocery list. Error: ', error);
      response.sendStatus(500);
    } else {
      console.log('Found grocery list: ', list);
      response.send(list);
    }
  })
});

// Add a new item to the grocery list!

router.post('/addItem', function(request, response){
  var data = request.body;
  var createdItem = new GroceryList({
    itemName: data.itemName,
    quantity: data.quantity
  });

  createdItem.save(function(error){
    if(error){
      console.log('Failed to save new item! Error: ', error);
      response.sendStatus(500);
    }
  });
  response.sendStatus(200);
});

//Cwklausing: Updated the route to include a /:id
router.put('/updateItem', function(request, response){
  var itnm = request.body;
  var id = request.body.id;
  console.log("request.body: ", request.body);

  //Take this out once you put in mongoose
  response.send(200);
  /**
   *
  For Megan: You don't need to break this into separate functions--you pass two types of information
   here--the id (passed in the url), and the data (which is the entire item object).
   You're on the right track with findOneAndUpdate, but I'll leave it to you to finish updating
   the database. Let me know if you have any questions.
  **/
  //GroceryList.findOneAndUpdate({_id: id}, {$set:{itemName:itnm}}, function(error){
  //  if(error){
  //    console.log('Could not update item! Error: ', error);
  //    response.sendStatus(500);
  //  } else {
  //    console.log('List item successfully updated!');
  //    response.sendStatus(200);
  //  }
  //})
});


// Remove an item from the grocery list!

router.delete('/deleteItem/:id', function(request, response){
  var id = request.params.id;
  //Test to make sure that the correct ID is being selected
  console.log(id);
  GroceryList.findByIdAndRemove(id, function(error){
    if(error){
      console.log('Could not delete item! Error: ', error);
      response.sendStatus(500);
    } else {
      console.log('List item successfully deleted!');
      response.sendStatus(200);
    }
  })
});


module.exports = router;
