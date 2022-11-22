const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/controllers.js')
const router = express.Router();
let app = express();

//app.use(express.static(__dirname + '/../client/dist'));This may be deprecated

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.use(express.static(__dirname + '/../client/dist/'))
app.use(cors());
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  controllers.post(req, res);
  // console.log(`PROCESSING REQUEST ${req.method} at ${req.url}`);
  // res.sendStatus(201);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log(`PROCESSING REQUEST ${req.method} at ${req.url}`);
  // res.sendStatus(200);
  controllers.get(req, res);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});