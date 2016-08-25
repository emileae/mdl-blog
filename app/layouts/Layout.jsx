import React from 'react';
import * as Redux from 'react-redux';
import {Link, IndexLink} from 'react-router';

import * as actions from 'actions';

export var Layout = React.createClass({
  render() {
    return (
      <div>

        <div className="top-bar">
          <div className="top-bar-title">The Layout</div>
          <div>
            <div className="top-bar-left"></div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
                </li>
                <li>
                  <Link to="/yoyo" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Yoyo</Link>
                </li>
                <li>
                  <Link to="/blog" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page-content">
          { this.props.children }
        </div>

      </div>
    )
  }
});

export default Redux.connect()(Layout);
