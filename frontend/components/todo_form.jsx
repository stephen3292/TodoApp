var React = require('react'),
    TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function(){
    return(
      {title: "", body: ""}
    );
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value, body: this.state.body});
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value, title: this.state.title});
  },

  handleSubmit: function() {
    TodoStore.create(this.state);
    this.setState({title: "", body: ""});
  },

  render: function(){
    return(
      <div>
        <h3>Create a new Todo</h3>
        Title: <input className="form-title" onInput={this.updateTitle} value={this.state.title}></input><br/>
      Body: <input className="form-body" onInput={this.updateBody} value={this.state.body}></input><br/>
        <button className="form-button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
});

module.exports = TodoForm;
