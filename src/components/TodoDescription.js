import React, { useState, useEffect } from 'react';
import TodoButton from './todoButoon';

const TodoDescription=(props)=>{
    const [state,setState]=useState({
        todo:null,
    });
    useEffect(()=>{
        const getItemId=()=>{
            const id=parseInt(props.match.params.id);
            const item = props.state.todo.filter(item=>item.id===id)[0];
            setState({...state,todo:item})
        }
    
        getItemId();
    // eslint-disable-next-line
    },[]);
    
    if(!state.todo)
        return(
            <div>Not Found</div>
        );
        else return(
            <div className="todo-body">
                <TodoButton history={props.history}/>
                <h2>Todo Details</h2>
                <h3>Title: {state.todo.title}</h3>
                <h4>Description: {state.todo.description}</h4>
                <button className="back-btn" onClick={()=>props.history.push('/')}>Back</button>
            </div>
        );
    }


 
export default TodoDescription;