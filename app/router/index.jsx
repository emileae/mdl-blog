import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var store = require('configureStore').configure();
var actions = require('actions');

// import pages
import Homepage from 'Homepage';
import Yoyo from 'Yoyo';
import BlogList from 'BlogList';
import BlogPost from 'BlogPost';
import Post from 'Post';

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

var indexSettings = (showMoreButton) => {
  console.log("call the indexSettings function...", showMoreButton);
  store.dispatch(actions.showMoreButton(showMoreButton));
};



export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={BlogList} onEnter={indexSettings(true)}></IndexRoute>
      <Route path="/yoyo" component={Yoyo}></Route>
      <Route path="/blog" component={BlogList}></Route>
      <Route path="/post/:postId" component={Post} onEnter={indexSettings(false)}></Route>
    </Route>
  </Router>
)
