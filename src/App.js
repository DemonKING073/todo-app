import React from 'react';
import AppBar from './components/appBar';
import TodoBody from './components/todoBody';
import {Switch, Route} from 'react-router-dom';
import AddTodo from './components/addTodo';
import TodoDescription from './components/TodoDescription';


class App extends React.Component {
  state = { 
    todo:[]
   }
  handleDelete=(id)=>{
    const cloneState =[...this.state.todo];
    const newState= cloneState.filter((item)=>{
      
      return item.id !==id;
    });
    this.setState({...this.state, todo: newState})
  }
  handleCheck=(id)=>{
    const cloneState=[...this.state.todo];
    const newState=cloneState.map((item)=>{
      if(item.id===id) return {...item, completed:!item.completed};
      return item;
    })
    this.setState({...this.state, todo:newState});
  }
  handleAdd=(title, description)=>{
    console.log(title,description);
    const newTodo={
        id:this.state.todo.length+1,
        title:title,
        description:description,
        completed:false,
    }
    // const todo=[...this.state.todo];
    // console.log(newTodo)
    // todo.push(newTodo);
    this.setState({...this.state, todo:[...this.state.todo,newTodo]});
}
  render() { 
    return ( 
        <div className="box">
          <AppBar />
          <Switch>
            <Route 
            path="/"
            exact
            render={(props)=><TodoBody {...props} handleDel={this.handleDelete} checkToogle={this.handleCheck} state={this.state} />}
            />
            <Route
            exact
            path="/add_todo"
            render={(props)=><AddTodo {...props} handleAdd={this.handleAdd} />}
            />
            <Route
            path="/todo/:id"
            exact
            render={(props=><TodoDescription {...props} state={this.state} />)}
            />
          </Switch>
        </div>
     );
  }
}
 
export default App;


