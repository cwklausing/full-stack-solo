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
  var createdItem = new groceryList({
    name: data.name,
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
