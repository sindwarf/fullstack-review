const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //Think of this like were storing one parameter
  username : String;
  forkCount : Number; //filter by top 25
  watchers : Number;
  repoName : String;
  description : String;
  //some useful parameter to filter top 25 repos by
});

//

let Repo = mongoose.model('Repo', repoSchema);


let save = (username, gitHubResponse, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repoObj = {
    name : username,
    repos : gitHubResponse,
    searchCount
  }

  let newRepo = new Repo(gitHubResponse)
  newRepo.save((err) => {
    if(err) {
      console.log('ERROR: ', err);
      callback(err, null);
    } else {
      console.log('Successfully stored repo')
      callback(null, err);
    }
  });
}

//TODO: write get function
//sort everything here and only return

module.exports.save = save;