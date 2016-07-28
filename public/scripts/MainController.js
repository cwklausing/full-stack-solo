angular.module('groceryList', []);

// This is the main controller for my angular app
angular.module('groceryList').controller('MainController', function($http) {

    // Setting VM equal to 'this', so it does not get confused in later functions for something else.
    var vm = this;

    // Submit user inputted data on button click, send to database and display on page.
    vm.submitListItem = function() {
        var sendData = {};
        console.log('click!')
        sendData.itemName = vm.itemName;
        sendData.quantity = vm.quantity;

        $http.post('/groceryList/addItem', sendData).then(function(response) {
            console.log(response);
            getList();
        }, function(response) {
            console.log('Post failed! Error: ', response);
        })

    }

    // Function to get the list of grocery items
    var getList = function(){
        $http.get('/groceryList/getList').then(function(response) {
            console.log('Returned list', response);
            vm.groceryListItems = response.data
        })
    };
    getList();

    // Sends the ID of whichever list item the user has selected to be deleted
    vm.deleteListItem = function(id) {
        $http.delete('/groceryList/deleteItem/' + id).then(function(response) {
            console.log(response);
            getList();
        });
    };

    //Update item in list *** Not tested! ****
    vm.updateListItem = function(item){
      console.log(item);
      //$http.put('/groceryList/updateItem/' + id, itnm).then(function(response){
      //  console.log(response);
      //  getList();
      //});
    };
    // Toggle Show/Hide Update -- *****NEEDS TO BE COMPLETED*****
    // vm.toggle = function(){
    //
    // }


});
