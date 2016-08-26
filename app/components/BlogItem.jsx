var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import {Link} from 'react-router';
//var store = require('configureStore').configure();

var imageStyle = {
  maxWidth: '500px',
  display: 'inline-block',
  margin: 'auto'
};

export var BlogItem = React.createClass({
  // getPost: function(postId) {
  //   store.dispatch(actions.startGetPost(postId));
  // },
  render: function(){
    var {id, title, body, coverImage, author, created, dispatch} = this.props;
    var linkUrl = '/post/'+id.toString();
    return (
      <div className="blog-list-item">
        <img src={coverImage} style={imageStyle}/>
        <h2>
        <Link to={linkUrl}>{title}</Link>
        </h2>
      </div>
    )
  }
});

export default connect()(BlogItem);
