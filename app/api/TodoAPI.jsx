var $ = require('jQuery');
module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      /*Local strorage only stores strings so convert our data into a string
      *Then Set it as an item in storage
      */
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    //convert string to JSON
    try{
      todos = JSON.parse(stringTodos);
    } catch (e){

    }
    //turnary operator
    return $.isArray(todos) ? todos :[]
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filterby showCompleted
    filteredTodos = filteredTodos.filter((todoitem) => {
      return !todoitem.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todoitem) => {
      if(!searchText.length == 0) {
        if(todoitem.text.toLowerCase().indexOf(searchText) !=  -1){
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    //sort to dos by non completed
    //use sort method
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed ) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })

    return filteredTodos;
  }
};
