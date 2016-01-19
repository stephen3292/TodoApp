/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	TodoStore = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var _todos = [],
	    _callbacks = [],
	    lookup = function (id) {
	  for (var i = 0; i < _todos.length; i++) {
	    if (_todos[i].id === id) {
	      return i;
	    }
	  }
	  return -1;
	};
	
	var TodoStore = {
	
	  all: function () {
	    return _todos.slice();
	  },
	
	  fetch: function () {
	    $.ajax({
	      type: "GET",
	      url: "./api/todos",
	      dataType: "JSON",
	      success: function (data) {
	        _todos = data;
	        TodoStore.changed();
	      }
	    });
	  },
	
	  addChangeHandler: function (handler) {
	    _callbacks.push(handler);
	  },
	
	  removeChangeHandler: function (handler) {
	    var idx = _callbacks.indexOf(handler);
	    if (idx !== -1) {
	      _callbacks.splice(idx, 1);
	    }
	  },
	
	  changed: function () {
	    _callbacks.forEach(function (callback) {
	      callback();
	    });
	  },
	
	  create: function (todo) {
	    $.ajax({
	      type: "POST",
	      url: "./api/todos",
	      dataType: "JSON",
	      data: { todo: todo },
	      success: function (data) {
	        _todos.push(data);
	        TodoStore.changed();
	      }
	    });
	  },
	
	  destroy: function (id) {
	    var idx = lookup(id);
	    if (idx !== -1) {
	      $.ajax({
	        type: "DELETE",
	        url: "./api/todos/" + id,
	        success: function (data) {
	          _todos.splice(idx, 1);
	          TodoStore.changed();
	        }
	      });
	    }
	  },
	
	  toggleDone: function (id) {
	    var idx = lookup(id);
	    var todo = _todos[idx];
	    var newBoolean = todo.done ? false : true;
	    todo.done = newBoolean;
	    if (idx !== -1) {
	      $.ajax({
	        type: "PATCH",
	        url: "./api/todos/" + id,
	        dataType: "json",
	        data: { todo: todo },
	        success: function (data) {
	          TodoStore.changed();
	        }
	      });
	    }
	  }
	
	};
	
	module.exports = TodoStore;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map