var router = require('express').Router();
var path = require('path');

// Sends the index.html file upon request to / route.
router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
