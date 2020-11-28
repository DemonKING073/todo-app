import React from 'react';

const TodoButton=(props)=>{
   
    
        const {history}=props;
        
        return ( 
            <div className="todo-button-div">
                <button className="todo-button" onClick={()=>history.push('/add_todo')} >Add your list </button>
                <br />
            </div>
         );
    
}
 
export default TodoButton;