var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require('./done_button'),
    TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function() {
    return (
      {detail: false}
    );
  },
  handleDelete: function () {
    TodoStore.destroy(this.props.id);
  },

  handleDone: function (e) {
    e.stopPropagation();
    TodoStore.toggleDone(this.props.id);
  },

  toggleState: function () {
    var newDetail = this.state.detail ? false : true;
    this.setState({detail: newDetail});
  },
  render: function () {
    return(
      <div className='list-item' onClick={this.toggleState}>
        <div className="title">{this.props.title}</div>
        <DoneButton handleDone={this.handleDone} done={this.props.done} id={this.props.id} />
        <TodoDetailView
          id={this.props.id}
          display={this.state.detail}
          body={this.props.body}
          delete={this.handleDelete} />
      </div>
    );
  },
});

module.exports = TodoListItem;
