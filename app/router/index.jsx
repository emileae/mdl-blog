import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var store = require('configureStore').configure();
var actions = require('actions');
var store = require('configureStore').configure();

// import pages
import BlogList from 'BlogList';
import BlogPost from 'BlogPost';
import Draft from 'Draft';
import Homepage from 'Homepage';
import Login from 'Login';
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

var showAdminUIIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    //console.log('firebase.auth(): ', firebase.auth());
    store.dispatch(actions.login(firebase.auth().currentUser.uid))
  }
  next();
};

// var indexSettings = (showMoreButton) => {
//   console.log("call the indexSettings function...", showMoreButton);
//   store.dispatch(actions.showMoreButton(showMoreButton));
// };


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={BlogList} onEnter={showAdminUIIfLoggedIn}></IndexRoute>
      <Route path="/login" component={Login}></Route>
      <Route path="/post/:postId" component={Post}></Route>
      <Route path="/draft" component={Draft}></Route>
    </Route>
  </Router>
)
