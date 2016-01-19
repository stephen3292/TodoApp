var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require('./done_button');

var TodoListItem = React.createClass({
  render: function () {
    return(
      <div>
        <div className="title">{this.props.title}</div>
        <div className="body">{this.props.body}</div>
        <button className="item-delete" onClick={this.handleDelete}>Delete</button>
        <DoneButton done={this.props.done} id={this.props.id} />
      </div>
    );
  },
  handleDelete: function () {
    TodoStore.destroy(this.props.id);
  }
});

module.exports = TodoListItem;
