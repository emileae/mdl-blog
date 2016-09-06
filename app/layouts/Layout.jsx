import React from 'react';
import * as Redux from 'react-redux';
import {Link, IndexLink} from 'react-router';

// UI

import * as actions from 'actions';

export var Layout = React.createClass({
  componentDidMount() {
    // this tells MDL that it needs to initialise components to refresh things
    componentHandler.upgradeDom();
    componentHandler.upgradeAllRegistered();
  },
  render() {

    var {settings} = this.props;

    // var showBackButton = () => {
    //   if ( settings.showBackButton ){
    //     return (
    //       <div className="demo-back">
    //         <IndexLink className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" to="/" title="go back" role="button">
    //           <i className="material-icons" role="presentation">arrow_back</i>
    //         </IndexLink>
    //       </div>
    //     )
    //   };
    // };

    // var showMoreButton = () => {
    //   if ( settings.showMoreButton ){
    //   return (
    //     <nav className="demo-nav mdl-cell mdl-cell--12-col">
    //       <div className="section-spacer"></div>
    //       <a href="entry.html" className="demo-nav__button" title="show more">
    //         More
    //         <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
    //           <i className="material-icons" role="presentation">arrow_forward</i>
    //         </button>
    //       </a>
    //     </nav>
    //   );
    //   }
    // };

    return (
      <div className="demo-blog mdl-layout">
        <main className="mdl-layout__content">

            { this.props.children }

          <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer--left-section">
              <button className="mdl-mini-footer--social-btn social-btn social-btn__twitter">
                <span className="visuallyhidden">Twitter</span>
              </button>
              <button className="mdl-mini-footer--social-btn social-btn social-btn__blogger">
                <span className="visuallyhidden">Facebook</span>
              </button>
              <button className="mdl-mini-footer--social-btn social-btn social-btn__gplus">
                <span className="visuallyhidden">Google Plus</span>
              </button>
            </div>
            <div className="mdl-mini-footer--right-section">
              <button className="mdl-mini-footer--social-btn social-btn__share">
                <i className="material-icons" role="presentation">share</i>
                <span className="visuallyhidden">share</span>
              </button>
            </div>
          </footer>

        </main>

        <div className="mdl-layout__obfuscator"></div>
      </div>
    )
  }
});

export default Redux.connect((state) => {
  return state;// return post property on state
})(Layout);
