import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// Layout
import Layout from 'Layout';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <Layout>
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored" onClick={this.onLogin}>Login with Facebook</button>
      </Layout>
    )
  }
});

export default Redux.connect()(Login);
