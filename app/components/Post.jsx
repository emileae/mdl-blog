var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import {Link} from 'react-router';

// import layout
import Layout from 'Layout';

var imageStyle = {
  maxWidth: '500px',
  display: 'inline-block',
  margin: 'auto'
};

export var Post = React.createClass({
  componentDidMount() {
    var {dispatch} = this.props;
    var postId = this.props.params.postId;

    // get post
    dispatch(actions.startGetPost(postId));

    // show back button
    dispatch(actions.showBackButton(true));
    // hide more button
    dispatch(actions.showMoreButton(false));
  },
  render: function(){

    var renderPost = (postId) => {

      var {post, dispatch} = this.props;

      const coverImage = post.coverImage ? post.coverImage : 'url(images/road.jpg)';
      var styles = {
        backgroundImage: coverImage
      };

      if (!post){
        return (
          <p className="container__message">
            Loading post...
          </p>
        )
      }else{
        return (
          <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">

            <div className="mdl-card__media mdl-color-text--grey-50" style={styles}>
              <h3>{post.title}</h3>
            </div>
            <div className="mdl-color-text--grey-700 mdl-card__supporting-text meta">
              <div className="minilogo"></div>
              <div>
                <strong>The Blog</strong>
                <span>{post.created}</span>
              </div>
              <div className="section-spacer"></div>
              <div className="meta__favorites">
                425 <i className="material-icons" role="presentation">favorite</i>
                <span className="visuallyhidden">favorites</span>
              </div>
              <div>
                <i className="material-icons" role="presentation">bookmark</i>
                <span className="visuallyhidden">bookmark</span>
              </div>
              <div>
                <i className="material-icons" role="presentation">share</i>
                <span className="visuallyhidden">share</span>
              </div>
            </div>

            <div className="mdl-color-text--grey-700 mdl-card__supporting-text">
              {post.text}
            </div>

          </div>
        )
      }
    };

    return (
      <Layout>
        {renderPost()}
      </Layout>
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
)(Post);
