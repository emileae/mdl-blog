var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

// authentication
firebase.auth().onAuthStateChanged((user) => {
  console.log('Auth State Changed');
  if (user) {
    // store.dispatch(actions.login(user.uid));
    // store.dispatch(actions.startAddTodos());
    // hashHistory.push('/todos');
  }else{
    store.dispatch(actions.logout());
    hashHistory.push('/');
  };
});

// load the first blog posts initially
store.dispatch(actions.startGetPosts());

// Load foundation
//$(document).foundation();

// load custom styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
