var uuid = require('node-uuid');
var moment = require('moment');

export var settingsReducer = (state = {showBackButton: false, showMoreButton: true}, action) => {
  switch(action.type){
    case 'SHOW_BACK_BUTTON':
      return {
        ...state,
        showBackButton: action.showBackButton
      }
      case 'SHOW_MORE_BUTTON':
        return {
          ...state,
          showMoreButton: action.showMoreButton
        }
    default:
      return state
  }
};

export var postsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_POSTS':
    return [
      ...state,
      ...action.posts
    ];
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    default:
      return state
  }
};

export var postReducer = (state = {}, action) => {
  switch(action.type){
    case 'GET_POST':
      console.log('GET_POST: ', action.post);
      return action.post;
    default:
      return state
  }
};



// =====================
export var textReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_TEXT':
      return action.text;
    default:
      return state
  }
};

export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type){
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
          if (todo.id === action.id){
            return {
              ...todo,
              ...action.updates
            }
          } else{
            return todo;
          }
        });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'LOGOUT':
      return []
    default:
      return state;
  };
};

export var authReducer = (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
};
