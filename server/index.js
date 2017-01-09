const express = require('express');
import fetch from "node-fetch";
import "babel-polyfill";
const app = express();

app.get('*', (req, res) => {
});

app.listen(8081, function() {
  console.log('server listening on port 8081');
});