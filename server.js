const express = require('express');

const server = express();

server.get('/',function(req,res){
  res.send('Hello Wolrd');

});

server.listen(3000, function(){
  console.log('Server Started on port 3000 ...');
})
