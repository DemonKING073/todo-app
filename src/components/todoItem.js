import React from 'react';

const TodoItem=(props)=>{
    const handleClick=()=>{
        props.history.history.push('/todo/'+props.id)
    }
    return ( 
        <div className="todo-item-div">
             <div className="check-and-title">
                <div>
                    <input type="checkbox" checked={props.completed} onChange={()=>props.checkToogle(props.id)}/>
                </div> 
                <div onClick={handleClick}  style={{cursor:'pointer', textDecoration: props.completed? 'line-through':'none' }}>
                    {props.title}
                </div>  
            </div>
         
            <button className="del-btn" onClick={()=>props.handleDel(props.id)}>Delete</button>   
        </div>
     );
}
    
   
    

 
export default TodoItem;