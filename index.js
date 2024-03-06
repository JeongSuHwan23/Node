const express = require('express');
const app = express();
const port = 3000;
const webSocket = require('./socket');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, () => {
  console.log('listening on 3000');
});

webSocket(server);