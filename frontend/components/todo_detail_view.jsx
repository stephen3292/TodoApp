var React = require('react');
var TodoStore = require('../stores/todo_store');
var Step = require('./step');
var StepStore = require('../stores/step_store');

var TodoDetailView = React.createClass({
  getInitialState: function() {
    return (
      {steps: StepStore.all(this.props.id)}
    );
  },
  componentDidMount: function() {
    StepStore.addChangeHandler(this.stepsChange);
    StepStore.fetch(this.props.id);
  },
  stepsChange: function() {
    this.setState({steps: StepStore.all(this.props.id)});
  },

  render: function () {
    if (this.props.display) {
      var stepMapper = this.state.steps.map(function(step){
        return (
            <li><Step key={step.id} id={step.id} done={step.done} ord={step.ord} step={step.step}/></li>
        );
      });

      return (
      <div>
        <div className="body">{this.props.body}</div>
        <ol>{stepMapper}</ol>
        <button className="item-delete" onClick={this.props.delete}>Delete</button>
      </div>
    );
    } else {
      return <div/>;
    }
  }
});



module.exports = TodoDetailView;
