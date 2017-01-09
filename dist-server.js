var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.use('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8081, function() {
  console.log('server listening on port 8081');
});