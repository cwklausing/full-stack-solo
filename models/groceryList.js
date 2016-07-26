var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// This is the schema for all grocery list items!
var groceryListSchema = new Schema({
  itemName: String,
  quantity: Number
});

// This creates + accesses the database
var GroceryList = mongoose.model('GroceryList', groceryListSchema);

module.exports = GroceryList;
