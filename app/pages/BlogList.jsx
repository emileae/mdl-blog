import React from 'react';
import * as Redux from 'react-redux';

// third aprty stuff
import moment from 'moment';

import * as actions from 'actions';

// import helpers
import DataHandler from 'DataHandler';

// import layout
import Layout from 'Layout';

// import components
import PostPreview from 'PostPreview';

export var BlogList = React.createClass({
  render() {

    var {posts} = this.props;


    var renderPostList = () => {
      if (posts.length === 0){
        return (
          <p className="container__message">
            Nothing to read yet...
          </p>
        )
      }
      return posts.map((post) => {
        return (
          <PostPreview key={post.id} {...post}/>
        );
      })
    };

    return (
      <Layout>
        {renderPostList()}
      </Layout>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(BlogList);
