var steps = {},
  _callbacks = [],
  remove = function(id) {
    for (var todoId in steps) {
      if(steps.hasOwnProperty(todoId)) {
        for (var j = 0; j < steps[todoId].length; j++) {
          if (steps[todoId][j].id === id) {
            steps[todoId].splice(j, 1);
          }
        }
      }
    }
  },

  lookup = function(id) {
    for (var todoId in steps) {
      if(steps.hasOwnProperty(todoId)) {
        for (var j = 0; j < steps[todoId].length; j++) {
          if (steps[todoId][j].id === id) {
            return [todoId, j];
          }
        }
      }
    }
    return -1;
  };

StepStore = {
  all: function(todoId){
    return(steps[todoId]);
  },

  addChangeHandler: function(handler) {
    _callbacks.push(handler);
  },

  removeChangeHandler: function(handler) {
    var idx = _callbacks.indexOf(handler);
    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  },

  fetch: function (todoId) {
    $.ajax({
      type: "GET",
      url: "/api/todos/" + todoId + "/steps",
      dataType: "JSON",
      success: function(data) {
        steps[todoId] = data;
        StepStore.changed();
      }
    });
  },

  create: function (step, todoId) {
    $.ajax({
      type: "POST",
      url: "/api/todos/" + todoId + "/steps",
      dataType: "JSON",
      data: {step: step},
      success: function(data) {
        steps[todoId].push(data);
        StepStore.changed();
      }
    });
  },

  destroy: function(id) {
    $.ajax({
      type: "DELETE",
      url: "/api/steps/" + id,
      success: function(data) {
        remove(id);
        StepStore.changed();
      }
    });
  },

  toggleDone: function(id) {
    var idx = lookup(id)[1];
    var todoId = lookup(id)[0];
    var step = steps[todoId][idx];
    var newBoolean = step.done ? false : true;
    step.done = newBoolean;
    if (idx !== -1) {
      $.ajax({
        type: "PATCH",
        url: "/api/steps/" + id,
        dataType: "json",
        data: {step: step},
        success: function(data) {
          StepStore.changed();
        }
      });
    }
  },

  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  }

};


module.exports = StepStore;
