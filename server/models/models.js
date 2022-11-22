const db = require('../../database/');

exports.create = (data) => {
  //data is an array of repos with ALOT of data
  //call db.save passing in one at a time
    //db.save is expecting (repoObj, callback)
    return Promise.resolve(data)
    .then((pData) => {
      for(var repos of pData) {
        db.save(repos);
      }
    })

}

exports.read = (callback) => {
  db.getRepos(callback);
}