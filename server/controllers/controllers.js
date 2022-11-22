const models = require('../models/models.js');
const github = require('../../helpers/github.js')

exports.get = (req, res) => {
    // TODO - your code here!
  console.log(`PROCESSING REQUEST ${req.method} at ${req.url}`);
  models.read((err, data) => {
    if(err) {
      console.log('error somewhere below controller lol', err);
    } else {
      res.status(200).json(data);
    }
  })
  //res.sendStatus(200);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
};

exports.post = (req, res) => {//req.body.username is text entered
  console.log(`PROCESSING REQUEST ${req.method} at ${req.url}`);
  //CHECK HERE TO SEE IF OUR DATA EXISTS IN MONGODB
    //IF YES:
  github.getReposByUsername(req.body.username)
    .then((result) => {//waits for all promises within to finish
      return models.create(result.data);
    })
    .then(response => {//sends response if success
      res.sendStatus(201);
    })
    .catch((result) => {
      console.log('ERROR: ', result);
      res.sendStatus(404);
    });

};