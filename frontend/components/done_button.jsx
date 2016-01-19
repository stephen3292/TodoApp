var React = require('react'),
    TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({

  render: function() {
    var text = this.props.done ? "Undo" : "Done";
    return (
      <button className="done-undo-button" onClick={this.props.handleDone}>{text}</button>
    );
  }
});

module.exports = DoneButton;
