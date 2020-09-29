import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
  toggleTodo = (id) =>{
    this.setState({
      todos:this.state.todos.map(todo => {
        if(todo.id === id){
          return {...todo, completed:!todo.completed}
        }
        else{
          return todo
        }
      })
    })
  }

  completed = () => {
    const newTodo = this.state.todos.filter(todo => !todo.completed)
    this.setState({todos:newTodo})
  }
 
  addTodo = todoName => {
    const newTodo = {
      name:todoName,
      id:new Date(),
      completed:false,
    }
    this.setState({
      todos:[newTodo, ...this.state.todos]
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} completed = {this.completed} toggle = {this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
