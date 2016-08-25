import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// import layout
import Layout from 'Layout';

// import components
import TextArea from 'TextArea';

export var Page = React.createClass({
  render() {
    return (
      <Layout>

        <p>Hello page.... this is now the home page</p>
        <div>
          <TextArea/>
        </div>

      </Layout>
    )
  }
});

export default Redux.connect()(Page);
