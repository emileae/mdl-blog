import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// import pages
import Homepage from 'Homepage';
import Yoyo from 'Yoyo';
import BlogList from 'BlogList';
import BlogPost from 'BlogPost';

import TodoApp from 'TodoApp';
import TextArea from 'TextArea';

import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="/yoyo" component={Yoyo}></Route>
      <Route path="/blog" component={BlogList}></Route>
      <Route path="/post/:postId" component={BlogPost}></Route>
    </Route>
  </Router>
)
