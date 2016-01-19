var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('../components/todo_list_item');
var TodoForm = require('../components/todo_form');

var TodoList = React.createClass({
  getInitialState: function(){
    return {todos: TodoStore.all()};
  },

  componentDidMount: function(){
    TodoStore.addChangeHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangeHandler(this.todosChanged);
  },

  todosChanged: function(){
    this.setState({todos: TodoStore.all()});
  },

  render: function () {
    var listItems = this.state.todos.map(function (todo) {
      return <TodoListItem key={todo.id} id={todo.id} title={todo.title} body={todo.body} done={todo.done}/>;
    });
    return (
      <div className='todo-list'>
        <div>{listItems}</div>
        <TodoForm />
      </div>
    );
  }


});


module.exports = TodoList;
