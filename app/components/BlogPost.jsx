var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import {Link} from 'react-router';

import DataHandler from 'DataHandler';

var imageStyle = {
  maxWidth: '500px',
  display: 'inline-block',
  margin: 'auto'
};

export var BlogPost = React.createClass({
  componentWillMount() {
    // var postId = this.props.params.postId;
    // store.dispatch(actions.startGetPost(postId));
    console.log('Component will mount.....');
  },
  componentDidMount() {
    // var postId = this.props.params.postId;
    // store.dispatch(actions.startGetPost(postId));
    // console.log('Component did mount.....');
    var {dispatch} = this.props;
    var postId = this.props.params.postId;
    dispatch(actions.startGetPost(postId));
  },
  render: function(){

    // var postId = this.props.params.postId;
    // var {posts} = this.props;
    // var post = DataHandler.filterPost(posts, postId)[0];
    // console.log("posts: ", posts);
    // if ( !posts ){
    //   console.log("... no posts, still loading");
    // };

    //var postId = this.props.params.postId;

    var renderPost = (postId) => {

      // var postId = this.props.params.postId;
      // store.dispatch(actions.startGetPost(postId));

      // var {post} = this.props;

      // var post = {
      //   title: 'title',
      //   text: 'hello this is the text...'
      // }

      var {post, dispatch} = this.props;
      //
      // console.log("is there a post??", post);
      //
      // if ( !post || Object.keys(post).length === 0 && post.constructor === Object ){
      //   var postId = this.props.params.postId;
      //   dispatch(actions.startGetPost(postId));
      // };

      // var post = undefined;

      if (!post){
        return (
          <p className="container__message">
            Loading post...
          </p>
        )
      }else{
        return (
          <div className="blog-list-item">
            <h2>
              {post.title}
            </h2>
            <p>{post.text}</p>
          </div>
        )
      }
    };

    return (
      <div>
        {renderPost()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      post: state.post,
      dispatch: state.dispatch
    };// return post property on state
  }
)(BlogPost);
