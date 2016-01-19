var TodoStore = require('./stores/todo_store'),
    StepStore = require('./stores/step_store'),
    TodoList = require('./components/todo_list'),
    React = require('react'),
    ReactDOM = require('react-dom');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TodoList />, document.getElementById('root'));
});
