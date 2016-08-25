import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// import layout
import Layout from 'Layout';

// import components

export var Homepage = React.createClass({
  render() {
    return (
      <Layout>
        <p>Home Page</p>
        <div>
          <p>This is the home page...</p>
        </div>
      </Layout>
    )
  }
});

export default Redux.connect()(Homepage);
