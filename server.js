const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')
const API_PORT = process.env.port || 8000;
const app = express();

const whitelist = [
  'http://37.200.77.102:3000',
  'http://localhost:3000',
  'null',
];
const corsOptions = {
  origin: function(origin, callback){
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

const router = express.Router();
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// socket.io connection
// Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);
var clients = [];
var clientP = 0;
io.on('connection', function(socket){
  clients.push(socket);
  // clientP ++;
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('add-name', function(msg){
    console.log('message: ' + msg);
    clients.forEach(element => {
      if(element) element.emit('add-name', msg);
    });
  });

  socket.on('start-round1', function(msg){
    console.log('message: ' + msg);
    clients.forEach(element => {
      if(element) element.emit('start-round1', msg);
    });
  });

  socket.on('start-round2', function(msg){
    console.log('message: ' + msg);
    clients.forEach(element => {
      if(element) element.emit('start-round2', msg);
    });
  });

  socket.on('vote-round', function(msg){
    console.log('message: ' + msg);
    clients.forEach(element => {
      if(element) element.emit('vote-round', msg);
    });
  });

  socket.on('reboot', function(msg){
    console.log('message: ' + msg);
    clients.forEach(element => {
      if(element) element.emit('reboot', msg);
    });
  });
 
});
io.listen(8000);

app.get('*', function (req, res, next) {
	res.sendFile(path.resolve(path.join(__dirname, 'public/index.html')));
 });

app.use(function (req, res) {
	res.writeHeader(200, {'Content-Type': 'text/html'});
	res.end("angular routing");
});

app.listen(API_PORT, () => {
  console.log("Server is running at " + API_PORT);
})

