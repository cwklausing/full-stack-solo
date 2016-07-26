var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groceryListSchema = new Schema({
  name: String,
  quantity: Number
});

var GroceryList = mongoose.model('GroceryList', groceryListSchema);

module.export = GroceryList;
