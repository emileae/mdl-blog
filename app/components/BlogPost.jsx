var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import {Link} from 'react-router';
var store = require('configureStore').configure();

import DataHandler from 'DataHandler';

var imageStyle = {
  maxWidth: '500px',
  display: 'inline-block',
  margin: 'auto'
};

export var BlogPost = React.createClass({
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

      var postId = this.props.params.postId;
      store.dispatch(actions.startGetPost(postId));

      var {post} = this.props;

      if (!post){
        return (
          <p className="container__message">
            Loading post...
          </p>
        )
      }else{
        return (
          <div className="blog-list-item">
            <img src={post.coverImage} style={imageStyle}/>
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
    return state;// return post property on state
  }
)(BlogPost);
