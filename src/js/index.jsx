const SmartCSS = require('smart-css');
const React = require('react');
const App = require('./components/App.jsx');

React.render(<App />, document.getElementById('main'));

SmartCSS.injectStyles();
