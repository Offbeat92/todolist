import React from 'react';

const ToDoItem = ({todo, handleToggle, handleDelete}) => {

    //En "basfunktion" som hjälper att hantera clicks, ett simpelt sätt att mata in vad som har blivit klickat.
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
                
    }

   return (
       <div>
          <div id={todo.id} className={todo.complete ? "mark" : "" } onClick={handleClick}> <p>{todo.task},  {todo.date}</p></div> <button className='deleteButton' onClick={() => handleDelete(todo.id)} >X</button>
          <hr id='todoLine'/>
       </div>
   );
};
 
export default ToDoItem;