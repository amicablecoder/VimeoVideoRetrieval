var express = require('express')
var app = express()
var vimeolocation = require('./routes/vimeoAPI')
var dblocation = require('./routes/database')
var doclocation = require('./routes/firebasestorage')

  // create upload request to vimeo
  app.get('/uploadvideo', vimeolocation.createuploadVideoRequest)

  // get all uploaded uploaded videos
  app.get('/getvideo', vimeolocation.uploadedvideos)

  // get db connection
  app.get('/connection', dblocation.dbconnection)

  // call upload document
  app.get('/uploaddoc', doclocation.uploaddocument)

  /*Start listening*/
  app.listen(8000, function(){
    console.log('server started at 8000')
  });
