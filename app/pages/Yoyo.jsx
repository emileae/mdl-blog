import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// import layout
import Layout from 'Layout';

// import components

export var Yoyo = React.createClass({
  render() {
    return (
      <div>
        <Layout>
          <p>Yoyo Page</p>
          <div>
            <p>This is the Yoyo page...</p>
          </div>
        </Layout>

      </div>
    )
  }
});

export default Redux.connect()(Yoyo);
