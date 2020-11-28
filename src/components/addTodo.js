import React, { useState } from 'react';

const AddTodo=(props)=>{
    const [state,setState]=useState({
        title:'',
        description:'',
    })

    const handleInput=(e)=>{
        setState({...state,[e.target.name]:e.target.value});
    }
    const handleTextArea=(e)=>{
        setState({...state, [e.target.name]: e.target.value});
    }
    return ( 
        <div className="todo-body">
            <h1>Enter Details</h1>
            <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInput}
            />
            <br />
            <textarea 
            name="description"
            placeholder="Enter Description"
            onChange={handleTextArea}
            />
            <br />
            <button
            className="add-btn"
            onClick={()=>{props.handleAdd(state.title,state.description)
                        props.history.push('/');
            }}
            >
                Add Todo
            </button>

        </div>
     );
}


 
export default AddTodo;