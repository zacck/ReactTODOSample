//import react
var React = require('react');
var ReactDOM = require('react-dom');
//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//add components
var ToDo = require('ToDo');

//load actions
var actions = require('actions');
//load store this is the current state of the application
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
})

//lets do some example actions
store.dispatch(actions.addTodo('Clean the Desktop'));

store.dispatch(actions.setSearchText('Desktop'));

store.dispatch(actions.toggleShowCompleted());
//Load Foundation
$(document).foundation();


//app css require
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ToDo/>,
  document.getElementById('app')
);
