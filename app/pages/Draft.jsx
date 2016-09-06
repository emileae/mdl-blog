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

// draft.js editor
import {Editor, EditorState} from 'draft-js';


export var Draft = React.createClass({
  onChange(evt) {
    var {dispatch} = this.props;
    dispatch(actions.setEditor(evt.target.value))
  },
  render() {
    var {editorState} = this.props;
    var styles = {
      width: '100%',
      height: '500px',
      backgroundColor:' #fff',
    }
    return (
      <Layout>

        <div className="demo-blog__posts mdl-grid">

          <Editor editorState={editorState} onChange={this.onChange} style={styles}/>;

        </div>

      </Layout>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(Draft);
