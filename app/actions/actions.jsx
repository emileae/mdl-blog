import moment from 'moment';

import firebase, {firebaseRef, facebookProvider} from 'app/firebase/';// if file is called index can leave off filename

// UI settings

export var showBackButton = (showBackButton) => {
  return {
    type: "SHOW_BACK_BUTTON",
    showBackButton
  }
};
export var showMoreButton = (showMoreButton) => {
  console.log("call showMoreButton...");
  return {
    type: "SHOW_MORE_BUTTON",
    showMoreButton
  }
};

export var setEditor = (editorState) => {
  return {
    type: "SET_EDITOR_STATE",
    editorState
  }
};


// for the blog

export var startGetPosts = () => {
  return (dispatch, getState) => {
    //var uid = getState().auth.uid;
    var postsRef = firebaseRef.child(`posts`);
    return postsRef.once('value').then((snapshot) => {
      var posts = snapshot.val() || {};
      var parsedPosts = [];

      Object.keys(posts).forEach((postId) => {
        parsedPosts.push({
          id: postId,
          ...posts[postId]
        });
      });

      dispatch(getPosts(parsedPosts));
    });
  };
};
export var getPosts = (posts) => {
  return {
    type: "GET_POSTS",
    posts
  };
};

export var startGetPost = (postId) => {
  return (dispatch, getState) => {
    //var uid = getState().auth.uid;
    var postRef = firebaseRef.child(`posts/${postId}`);
    return postRef.once('value').then((snapshot) => {
      var post = snapshot.val() || {};
      console.log("snapshot val: ", post);
      var parsedPost = {};
      parsedPost = {
        id: postId,
        ...post
      };
      console.log("parsedPost: ", parsedPost);
      dispatch(getPost(parsedPost));
    });
  };
};
export var getPost = (post) => {
  return {
    type: "GET_POST",
    post
  };
};

export var startAddPost = (post) => {
  return (dispatch, getState) => {
    var createdPost = {
      ...post,
      createdAt: moment().unix()
    };
    // var uid = getState().auth.uid;
    // var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    var postRef = firebaseRef.child(`posts/`).push(createdPost);

    return postRef.then(() => {
      dispatch(addPost({
        ...createdPost,
        id: postRef.key
      }));
    });
  };
};

export var addPost = (post) => {
  return {
    type: "ADD_POST",
    post
  }
};






// ==========================
export var setText = (text) => {
  return {
    type: "SET_TEXT",
    text
  };
};

export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED",
  }
};

export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));

      // var todosObj = snapshot.val();
      // var keysArray = Object.keys(todosObj);
      // var todos = keysArray.map((k) => {
      //   return {
      //     ...todosObj[k],
      //     id: k
      //   }
      // });
      // console.log('todos', todos);
      // dispatch(addTodos(todos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id,
    updates
  }
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // ES6
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });

  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};
export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
      console.log("Auth worked", result);
      dispatch(login(result.user.uid));
    }, (error) => {
      console.log('unable to auth', error);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};
export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logged out');
    });
  };
};
