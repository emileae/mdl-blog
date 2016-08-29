import React from 'react';
import * as Redux from 'react-redux';
import {Link, IndexLink} from 'react-router';

// UI

import * as actions from 'actions';

export var Layout = React.createClass({
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            { this.props.children }
          </div>
        </main>
      </div>
    )
  }
});

export default Redux.connect()(Layout);


// MAterial design lite

// <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
//   <header class="mdl-layout__header">
//     <div class="mdl-layout__header-row">
//       <!-- Title -->
//       <span class="mdl-layout-title">Title</span>
//       <!-- Add spacer, to align navigation to the right -->
//       <div class="mdl-layout-spacer"></div>
//       <!-- Navigation. We hide it in small screens. -->
//       <nav class="mdl-navigation mdl-layout--large-screen-only">
//         <a class="mdl-navigation__link" href="">Link</a>
//         <a class="mdl-navigation__link" href="">Link</a>
//         <a class="mdl-navigation__link" href="">Link</a>
//         <a class="mdl-navigation__link" href="">Link</a>
//       </nav>
//     </div>
//   </header>
//   <div class="mdl-layout__drawer">
//     <span class="mdl-layout-title">Title</span>
//     <nav class="mdl-navigation">
//       <a class="mdl-navigation__link" href="">Link</a>
//       <a class="mdl-navigation__link" href="">Link</a>
//       <a class="mdl-navigation__link" href="">Link</a>
//       <a class="mdl-navigation__link" href="">Link</a>
//     </nav>
//   </div>
//   <main class="mdl-layout__content">
//     <div class="page-content"><!-- Your content goes here --></div>
//   </main>
// </div>


// Foundation Layout
// <div>
//
//   <div className="top-bar">
//     <div className="top-bar-title">The Layout</div>
//     <div>
//       <div className="top-bar-left"></div>
//       <div className="top-bar-right">
//         <ul className="menu">
//           <li>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
//           </li>
//           <li>
//             <Link to="/yoyo" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Yoyo</Link>
//           </li>
//           <li>
//             <Link to="/blog" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Blog</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
//
//   <div className="page-content">
//     { this.props.children }
//   </div>
//
// </div>
