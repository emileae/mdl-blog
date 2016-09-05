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
      </Layout>
    )
  }
});

export default Redux.connect()(Homepage);
