import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

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

    var {posts, auth} = this.props;

    var renderNewPostForm = () => {
      if(auth){
        if ( auth.uid && auth.uid.length > 0 ){
          return (
            <div>
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="new-post-title"/>
                  <label className="mdl-textfield__label" for="new-post-title">Title</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="new-post-short-description"/>
                  <label className="mdl-textfield__label" for="new-post-short-description">Short description</label>
                </div>
                <div className="">
                  <button class="mdl-button mdl-js-button mdl-button--fab">
                    Save
                  </button>
                </div>
              </form>
            </div>
          )
        };
      };

    };


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

        <div className="demo-blog__posts mdl-grid">

          {renderNewPostForm()}

          {renderPostList()}

          <nav className="demo-nav mdl-cell mdl-cell--12-col">
            <div className="section-spacer"></div>
            <Link to="/?from=xx" className="demo-nav__button" title="show more">
              More
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                <i className="material-icons" role="presentation">arrow_forward</i>
              </button>
            </Link>
          </nav>

        </div>

      </Layout>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(BlogList);
