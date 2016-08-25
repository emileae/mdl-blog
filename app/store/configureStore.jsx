//var redux = require('redux');
import * as redux from 'redux';

import {authReducer, postsReducer, postReducer} from 'reducers';

import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    posts: postsReducer,
    post: postReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
