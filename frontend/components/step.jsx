var React = require('react'),
    StepStore = require('../stores/step_store'),
    DoneButton = require('./done_button');

var Step = React.createClass({
  handleDone: function(e) {
    e.stopPropagation();
    StepStore.toggleDone(this.props.id);
  },

  render: function () {
    return (
      <div>
        <div>{this.props.step}</div>
        <DoneButton handleDone={this.handleDone} done={this.props.done} id={this.props.id} />
      </div>
    );
  }

});

module.exports = Step;
