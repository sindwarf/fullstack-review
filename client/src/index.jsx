import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);
    //postRepos(term);
    getRepos();
  }

  const postRepos = (searchTerm) => {//TODO: replace absolute path with dynamic path
    axios.post('http://localhost:1128/repos', {username : searchTerm})
    .then((response) => {
      console.log('We got a response!  :  ', response);
    })
    .catch((err) => {
      console.log('We got ERROR: ', err);
    })
  }

  const getRepos = () => {
    axios.get('http://localhost:1128/repos')
    .then((response) => {
      console.log('success!', response);
    })
    .catch((err) => {
      console.log('something went wrong getting');
    })
  }



  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));