const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //Think of this like were storing one parameter
  username : String,
  repoName : String,
  description : String,
  forkCount : Number, //filter by top 25
  watchers : Number
  //some useful parameter to filter top 25 repos by
});

//

let Repo = mongoose.model('Repo', repoSchema);


exports.save = (repoObj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let obj = {//look at format in data.json
    username : repoObj.owner.login,
    repoName : repoObj.name,
    description : repoObj.description,
    forkCount : repoObj.forks,
    watchers : repoObj.watchers
  }



  let newRepo = new Repo(obj)

  return new Promise((resolve, reject) => {
    newRepo.save((err) => {
      if(err) {
        reject(err);
      } else {
        console.log('success at db')
        resolve(err);
      }
    });
  }).catch((err) => {
    console.log('error in savedb', err);
  })

}


//TODO: write get function
//sort everything here and only return
exports.getRepos = (callback) => {
  //only return the top 25 repos
  Repo.find({}, (err, response) => {//TODO filter out top 25 by watchers
    if(err) {
      console.log('error reading db');
      callback(err, null)
    } else {
      console.log('success reading db');
      callback(null, response);
    }
  });
};


