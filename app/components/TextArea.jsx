import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var TextArea = React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    console.log('Now save text to Firebase', this.refs.text.value);
  },
  handleChange() {
    console.log('Changed text', this.refs.text.value);
    var txt = this.refs.text.value;
    var {dispatch} = this.props;
    dispatch(actions.setText(txt));
  },
  render() {
    var {text, id, dispatch} = this.props;
    if ( text.length <= 0 ){
      text = "some default text";
    }
    var formHidden = true;
    var formClassName = formHidden ? 'form-container' : 'form-container';

    var showForm = () => {
      formHidden = !formHidden;
      formClassName = formHidden ? 'form-container' : 'form-container';
      console.log("toggle the class!!!!!", formClassName);
      console.log("bool", formHidden);
    };

    return (
      <div>

        <div className={formClassName}>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleChange} ref="text" value={text}></textarea>
            <button className="button">Save</button>
          </form>
        </div>

        <div className="row">

          <div className="columns small-centered small-12">
            <p onClick={showForm()}>{text}</p>
          </div>

        </div>

      </div>
    )
  }
});

export default Redux.connect((state) => {
  return {
    text: state.text
  };
})(TextArea);
