import React from 'react';
import TodoItem from './todoItem';
import TodoButton from './todoButoon';

const TodoBody =(props)=>{
        
         return ( 
            
            <div className="todo-body">
                <TodoButton history={props.history} />
                
                {props.state.todo.length===0?<h1>No Items...</h1>:
                props.state.todo.map((item)=>{
                    return (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            completed={item.completed}
                            handleDel={props.handleDel}
                            checkToogle={props.checkToogle}
                            history={props}
                        />
                    );
                })}
            </div>
         );
    
}


export default TodoBody;