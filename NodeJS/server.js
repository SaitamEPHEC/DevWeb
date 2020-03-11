const express = require('express');

const server = express();

server.get('/',function(req,res){
  res.setHeader('Content-Type','text/plain');
  res.send('Vous êtes à l\'acceuil');
});
server.get('/register',function(req,res){
  res.setHeader('Content-Type','text/plain');
  res.send('Vous êtes sur le point de vous enregister');
});
server.get('/profile',function(req,res){
  res.setHeader('Content-Type','text/plain');
  res.send('Vous êtes sur votre profil');
});
server.get('/',function(req,res){
  res.setHeader('Content-Type','text/plain');
  res.status(404).send('Page introuvable !');
});
server.listen(3000, function(){
  console.log('Server Started on port 3000 ...');
})
