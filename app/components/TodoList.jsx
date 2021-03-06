import React from 'react'
//goes with the provider
import {connect} from 'react-redux'
//modules needed
import TodoItem from 'TodoItem';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
    render () {
      /*Use state values*/
      /*get the props passed in from state */
      var {todos, showCompleted, searchText} = this.props;

      var renderTodos = () => {
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        if(filteredTodos.length === 0 ){
          return (
            <p className="container__message">Nothing to Do </p>
          );
        }
        return filteredTodos.map((todo) =>{
          return(
            /*Passing an array item to a list*/
            /*Remember to pass a key when dealing with lists ... << the spread operator*/
            <TodoItem key={todo.id} {...todo}/>
          );
        })
      };
       return(
               <div>
                 {renderTodos()}
               </div>
             );
    }
};

/*Connect lets us specify which pieces of state we want in this component
*return the pieces of state we need
*/
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
